import type { IUser, IWorkspace } from "@/entities";
import type { KubePod } from "@/interfaces/KubePod";
import type { MonitoringQueryFilter, MonitoringQueryOptions, MonitoringQueryParams } from "@/interfaces/MonitoringQuery";
import type { Ownership } from "@/interfaces/SystemTypes";
import ClusterManager from "@/modules/k8s";
import { objectToFilterLabels } from "@/modules/k8s/kubectl";
import { MongoDB } from "@/plugins/mongodb";

import { ClusterService } from "./ClusterService";

export class MonitorPodService {
	/**
	 * Current login user
	 */
	user?: IUser;

	/**
	 * Current active workspace
	 */
	workspace?: IWorkspace;

	/**
	 * Current owner & workspace
	 */
	ownership?: Ownership;

	constructor(ownership?: Ownership) {
		this.ownership = ownership;
		this.user = ownership?.owner;
		this.workspace = ownership?.workspace;
	}

	async create(
		filter: MonitoringQueryFilter,
		data: {
			/**
			 * Namespace's name
			 */
			name: string;
		}
	) {
		throw new Error(`This feature is under development`);
	}

	async find(filter: MonitoringQueryFilter, options?: MonitoringQueryOptions) {
		const { DB } = await import("@/modules/api/DB");
		const { namespace, cluster: clusterSlugOrId, ...rest } = filter;
		const clusterSvc = new ClusterService(this.ownership);

		let data: KubePod[] = [];

		if (!clusterSlugOrId) {
			const clusters = await clusterSvc.find({ workspace: this.workspace._id, ...rest });
			const ls = await Promise.all(
				clusters.map(async (cluster) => {
					const { contextName: context } = cluster;
					if (!context) return [] as KubePod[];

					let list = namespace ? await ClusterManager.getPods(namespace, { context }) : await ClusterManager.getAllPods({ context });

					list = list.map((ns) => {
						ns.workspace = MongoDB.toString(this.workspace._id);
						ns.clusterSlug = cluster.slug;
						ns.cluster = MongoDB.toString(cluster._id);
						return ns;
					});
					return list;
				})
			);
			ls.map((nsList) => nsList.map((ns) => data.push(ns)));
		} else {
			const clusterFilter = MongoDB.isValidObjectId(clusterSlugOrId) ? { _id: clusterSlugOrId } : { slug: clusterSlugOrId };
			const cluster = await clusterSvc.findOne({
				...clusterFilter,
				workspace: this.workspace._id,
				...rest,
			});
			if (!cluster) throw new Error(`Cluster "${clusterSlugOrId}" not found.`);

			const { contextName: context } = cluster;
			if (!context) throw new Error(`Unverified cluster: "${clusterSlugOrId}"`);

			data = namespace ? await ClusterManager.getPods(namespace, { context }) : await ClusterManager.getAllPods({ context });
			data = data.map((ns) => {
				ns.workspace = MongoDB.toString(this.workspace._id);
				ns.clusterSlug = cluster.slug;
				ns.cluster = MongoDB.toString(cluster._id);
				return ns;
			});
		}

		return data;
	}

	async findOne(filter: MonitoringQueryFilter, options?: MonitoringQueryOptions) {
		const data = await this.find(filter, options);
		return data[0];
	}

	async delete(params: MonitoringQueryParams) {
		const { DB } = await import("@/modules/api/DB");
		const { cluster: clusterSlugOrId, namespace, name } = params;

		if (!clusterSlugOrId) throw new Error(`Param "cluster" is required.`);
		if (!name) throw new Error(`Param "name" is required.`);

		const clusterFilter = MongoDB.isValidObjectId(clusterSlugOrId) ? { _id: clusterSlugOrId } : { slug: clusterSlugOrId };
		const cluster = await DB.findOne("cluster", { ...clusterFilter, workspace: this.workspace._id });
		if (!cluster) throw new Error(`Cluster "${clusterSlugOrId}" not found.`);

		const { contextName: context } = cluster;
		if (!context) throw new Error(`Unverified cluster: "${clusterSlugOrId}"`);

		const result = name
			? await ClusterManager.deletePod(name, namespace, { context })
			: await ClusterManager.deletePodsByFilter(namespace, { context, filterLabel: objectToFilterLabels(params.labels) });

		return result;
	}
}
