import { isNotIn } from "class-validator";
import { logError } from "diginext-utils/dist/console/log";
import { unlink } from "fs";
import { Body, Delete, Get, Patch, Post, Queries, Route, Security, Tags } from "tsoa/dist";

import type { ContainerRegistry } from "@/entities";
import { ContainerRegistryDto } from "@/entities";
import type { HiddenBodyKeys, ResponseData } from "@/interfaces";
import { IDeleteQueryParams, IGetQueryParams, IPostQueryParams, respondFailure, respondSuccess } from "@/interfaces";
import { registryProviderList } from "@/interfaces/SystemTypes";
import { DB } from "@/modules/api/DB";
import digitalocean from "@/modules/providers/digitalocean";
import gcloud from "@/modules/providers/gcloud";
import { connectRegistry } from "@/modules/registry/connect-registry";
import { createTmpFile } from "@/plugins";
import ContainerRegistryService from "@/services/ContainerRegistryService";

import BaseController from "./BaseController";

type MaskedContainerRegistry = Omit<ContainerRegistry, keyof HiddenBodyKeys>;

@Tags("Container Registry")
@Route("registry")
export default class ContainerRegistryController extends BaseController<ContainerRegistry> {
	constructor() {
		super(new ContainerRegistryService());
	}

	@Security("api_key")
	@Security("jwt")
	@Get("/")
	read(@Queries() queryParams?: IGetQueryParams) {
		return super.read();
	}

	@Security("api_key")
	@Security("jwt")
	@Post("/")
	async create(@Body() body: MaskedContainerRegistry, @Queries() queryParams?: IPostQueryParams) {
		let {
			name,
			organization,
			serviceAccount,
			provider: providerShortName,
			host,
			imageBaseURL,
			apiAccessToken,
			dockerUsername,
			dockerPassword,
			dockerServer,
			dockerEmail,
		} = body;

		// TODO: add dockerUsername, dockerPassword, dockerServer, dockerEmail
		// TODO: encrypt "dockerPassword"

		const errors: string[] = [];
		if (!name) errors.push(`Name is required.`);
		if (!providerShortName) errors.push(`Container registry provider is required (eg. gcloud, digitalocean, dockerhub,...)`);
		if (isNotIn(providerShortName, registryProviderList))
			errors.push(`Container registry provider should be one of [${registryProviderList.join(", ")}]`);

		if (errors.length > 0) return { status: 0, messages: errors } as ResponseData;

		if (providerShortName === "gcloud") {
			if (!host) host = "gcr.io";
			if (!serviceAccount) return respondFailure({ msg: `Service Account (JSON) is required to authenticate Google Container Registry.` });
		}

		if (providerShortName === "digitalocean") {
			if (!host) host = "registry.digitalocean.com";
			if (!apiAccessToken) return respondFailure({ msg: `API access token is required to authenticate DigitalOcean Container Registry.` });
		}

		if (providerShortName === "dockerhub") {
			if (!dockerUsername) return respondFailure({ msg: `Docker username is required.` });
			if (!dockerPassword) return respondFailure({ msg: `Docker password is required.` });
			if (!dockerServer) dockerServer = "https://index.docker.io/v2/";
			if (!host) host = "docker.io";

			// const saltRounds = 10;
			// dockerPassword = await bcrypt.hash(dockerPassword, saltRounds);
		}

		if (!imageBaseURL) imageBaseURL = `${host}/${organization}`;

		const newRegistryData = {
			name,
			organization,
			host,
			provider: providerShortName,
			serviceAccount,
			imageBaseURL,
			apiAccessToken,
			dockerUsername,
			dockerPassword,
			dockerServer,
			dockerEmail,
			isVerified: false,
		} as MaskedContainerRegistry;

		let newRegistry = await this.service.create(newRegistryData);

		// verify container registry connection...
		const authRes = await connectRegistry(newRegistry, { userId: this.user?._id, workspaceId: this.workspace?._id });
		if (authRes) [newRegistry] = await DB.update<ContainerRegistry>("registry", { _id: newRegistry._id }, { isVerified: true });

		// const newRegistry = await connectRegistry(newRegistryData, { userId: this.user?._id, workspaceId: this.workspace?._id });

		return respondSuccess({ data: newRegistry });
	}

	@Security("api_key")
	@Security("jwt")
	@Patch("/")
	async update(@Body() body: ContainerRegistryDto, @Queries() queryParams?: IPostQueryParams) {
		let {
			organization,
			serviceAccount,
			provider: providerShortName,
			host,
			imageBaseURL,
			apiAccessToken,
			dockerUsername,
			dockerPassword,
			dockerServer,
		} = body;

		const updateData: ContainerRegistryDto = body;

		if (providerShortName && isNotIn(providerShortName, registryProviderList))
			return respondFailure({ msg: `Container registry provider should be one of [${registryProviderList.join(", ")}]` });

		if (providerShortName === "gcloud") {
			if (!host) host = "gcr.io";
			if (!serviceAccount) return respondFailure({ msg: `Service Account (JSON) is required to authenticate Google Container Registry.` });
			if (!imageBaseURL) imageBaseURL = `${host}/${organization}`;
		}

		if (providerShortName === "digitalocean") {
			if (!host) host = "registry.digitalocean.com";
			if (!apiAccessToken) return respondFailure({ msg: `API access token is required to authenticate DigitalOcean Container Registry.` });
			if (!imageBaseURL) imageBaseURL = `${host}/${organization}`;
		}

		if (providerShortName === "dockerhub") {
			if (!dockerUsername) return respondFailure({ msg: `Docker username is required.` });
			if (!dockerPassword) return respondFailure({ msg: `Docker password is required.` });
			if (!dockerServer) dockerServer = "https://index.docker.io/v2/";
			if (!host) host = "docker.io";
			if (!imageBaseURL) imageBaseURL = `${host}/${organization}`;
		}

		// update db
		let [updatedRegistry] = await DB.update<ContainerRegistry>("registry", this.filter, updateData);
		if (!updatedRegistry) return respondFailure({ msg: `Failed to update.` });

		// verify container registry connection...
		let verifiedRegistry: ContainerRegistry;
		const authRes = await connectRegistry(updatedRegistry, { userId: this.user?._id, workspaceId: this.workspace?._id });
		[verifiedRegistry] = await DB.update<ContainerRegistry>("registry", { _id: updatedRegistry._id }, { isVerified: authRes ? true : false });

		return { status: 1, data: updatedRegistry, messages: authRes ? [authRes] : [] } as ResponseData;
	}

	@Security("api_key")
	@Security("jwt")
	@Delete("/")
	delete(@Queries() queryParams?: IDeleteQueryParams) {
		return super.delete();
	}

	@Security("api_key")
	@Security("jwt")
	@Get("/connect")
	async connect(@Queries() queryParams?: { slug: string }) {
		const result: { status: number; messages: string[]; data: any } = { status: 1, messages: [], data: {} };

		const options = { userId: this.user?._id.toString(), workspaceId: this.user?.activeWorkspace.toString() };
		// console.log("options :>> ", options);

		const { slug } = this.filter.query;
		if (!slug) {
			result.status = 0;
			result.messages = [`Param "slug" is required.`];
			return result;
		}

		const registry = await this.service.findOne({ slug });
		if (!registry) {
			result.status = 0;
			result.messages = [`Container Registry not found: ${slug}.`];
			return result;
		}
		// console.log("registry :>> ", registry);

		const { provider, host } = registry;
		switch (provider) {
			case "gcloud":
				const { serviceAccount } = registry;

				const tmpFilePath = createTmpFile(`gsa.json`, serviceAccount);

				const authResult = await gcloud.authenticate({ filePath: tmpFilePath, host, ...options });
				// console.log("authResult :>> ", authResult);
				if (authResult) {
					result.status = 1;
					result.messages = ["Ok"];
				} else {
					result.status = 0;
					result.messages = [`Google Cloud Container Registry authentication failed.`];
				}

				// delete temporary service account
				unlink(tmpFilePath, (err) => err && logError(`[REGISTRY CONTROLLER] Remove tmp file:`, err));

				return result;

			case "digitalocean":
				const { apiAccessToken } = registry;
				const doResult = await digitalocean.authenticate({ key: apiAccessToken, ...options });
				if (doResult) {
					result.status = 1;
					result.messages = ["Ok"];
				} else {
					result.status = 0;
					result.messages = [`Digital Ocean Container Registry authentication failed.`];
				}
				return result;

			default:
				result.status = 0;
				result.messages = [`This container registry is not supported (${provider}), only "gcloud" and "digitalocean" are supported.`];
				return result;
		}
	}
}
