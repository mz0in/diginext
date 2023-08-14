import type { FrameworkDto, IFramework } from "@/entities/Framework";
import { frameworkSchema } from "@/entities/Framework";
import { type IQueryOptions } from "@/interfaces";
import type { Ownership } from "@/interfaces/SystemTypes";
import { fetchTrendingRepos } from "@/modules/frameworks/github-trends";

import BaseService from "./BaseService";

export class FrameworkService extends BaseService<IFramework> {
	constructor(ownership?: Ownership) {
		super(frameworkSchema, ownership);
	}

	async create(data: FrameworkDto, options?: IQueryOptions) {
		if (options?.isDebugging) console.log("[FW SERVICE] CREATE > data :>> ", data);

		const { DB } = await import("@/modules/api/DB");

		// validate
		const requiredFields: string[] = [];
		if (!data.name) requiredFields.push("name");
		if (!data.repoURL) requiredFields.push("repoURL");
		if (!data.repoSSH) requiredFields.push("repoSSH");
		if (!data.gitProvider) requiredFields.push("gitProvider");
		if (!data.mainBranch) requiredFields.push("mainBranch");
		if (requiredFields.length > 0) throw new Error(`Required params: ${requiredFields.join(", ")}.`);

		let workspace = this.req?.workspace;
		if (!workspace && (data as any).workspace) workspace = await DB.findOne("workspace", { _id: (data as any).workspace });
		if (!workspace) throw new Error(`Workspace not found.`);

		// create
		const item = await super.create(data, options);
		return item;
	}

	async getGithubTrends() {
		const repos = await fetchTrendingRepos();
		return repos;
	}
}
