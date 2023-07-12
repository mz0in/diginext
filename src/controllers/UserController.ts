import { Body, Delete, Get, Patch, Post, Queries, Route, Security, Tags } from "@tsoa/runtime";
import { isArray } from "lodash";

import BaseController from "@/controllers/BaseController";
import type { IUser } from "@/entities";
import * as entities from "@/entities";
import * as interfaces from "@/interfaces";
import { MongoDB } from "@/plugins/mongodb";
import { assignRoleByID, assignRoleByRoleID, filterSensitiveInfo, filterUsersByWorkspaceRole, getActiveRole } from "@/plugins/user-utils";
import { UserService, WorkspaceService } from "@/services";

interface JoinWorkspaceBody {
	/**
	 * User ID
	 */
	userId: string;
	/**
	 * Workspace's ID or slug
	 */
	workspace: string;
}

@Tags("User")
@Route("user")
export default class UserController extends BaseController<IUser> {
	service: UserService;

	constructor() {
		super(new UserService());
	}

	/**
	 * List of users
	 */
	@Security("api_key")
	@Security("jwt")
	@Get("/")
	async read(@Queries() queryParams?: interfaces.IGetQueryParams) {
		const res = await super.read();

		// console.log("[1] res.data :>> ", res.data);
		if (isArray(res.data)) {
			res.data = await filterUsersByWorkspaceRole(MongoDB.toString(this.workspace._id), res.data);
			res.data = filterSensitiveInfo(res.data);
		} else {
			res.data = await filterUsersByWorkspaceRole(MongoDB.toString(this.workspace._id), [res.data]);
			res.data = filterSensitiveInfo([res.data]);
		}
		// console.log("[2] res.data :>> ", res.data);
		return res;
	}

	@Security("api_key")
	@Security("jwt")
	@Get("/profile")
	profile(@Queries() queryParams?: interfaces.IGetQueryParams) {
		return this.user;
	}

	@Security("api_key2")
	@Security("jwt")
	@Post("/")
	create(@Body() body: entities.UserDto, @Queries() queryParams?: interfaces.IPostQueryParams) {
		return super.create(body);
	}

	@Security("api_key")
	@Security("jwt")
	@Patch("/")
	async update(@Body() body: entities.UserDto, @Queries() queryParams?: interfaces.IPostQueryParams) {
		if (body.roles) {
			try {
				if (isArray(body.roles)) {
					await Promise.all(body.roles.map((roleId) => assignRoleByRoleID(roleId, this.user)));
				} else if (MongoDB.isValidObjectId(body.roles)) {
					const roleId = body.roles;
					await assignRoleByRoleID(roleId, this.user);
				}
				delete body.roles;
			} catch (e) {
				return interfaces.respondFailure(e.toString());
			}
		}

		// [MAGIC] if the item to be updated is the current logged in user -> allow it to happen!
		if (this.filter.owner && MongoDB.toString(this.filter.owner) === MongoDB.toString(this.user._id)) delete this.filter.owner;

		return super.update(body);
	}

	@Security("api_key")
	@Security("jwt")
	@Delete("/")
	delete(@Queries() queryParams?: interfaces.IDeleteQueryParams) {
		return super.delete();
	}

	@Security("api_key")
	@Security("jwt")
	@Patch("/assign-role")
	async assignRole(@Body() body: { roleId: string; userId: string }) {
		try {
			if (!body.roleId) throw new Error(`Param "roleId" is required.`);
			if (!body.userId) throw new Error(`Param "userId" is required.`);

			const { user, role } = await assignRoleByID(body.roleId, body.userId);
			return interfaces.respondSuccess({ data: { user, role } });
		} catch (e) {
			return interfaces.respondFailure(e.toString());
		}
	}

	@Security("api_key")
	@Security("jwt")
	@Patch("/join-workspace")
	async joinWorkspace(@Body() body: JoinWorkspaceBody) {
		// console.log("body :>> ", body);
		const { userId: uid, workspace: workspaceIdOrSlug } = body;

		try {
			if (!uid) throw new Error(`Param "userId" (User ID) is required.`);
			if (!workspaceIdOrSlug) throw new Error(`Param "workspace" (Workspace ID or slug) is required.`);

			// parse input params
			const userId = uid;

			// workspace in query could be "_id" and also "slug":
			let workspaceId = MongoDB.isValidObjectId(workspaceIdOrSlug) || MongoDB.isObjectId(workspaceIdOrSlug) ? workspaceIdOrSlug : undefined;
			// return undefined if can't convert to "ObjectId" -> it's a "slug" !!! (lol)
			let workspaceSlug = !workspaceId ? workspaceIdOrSlug : undefined;

			if (!workspaceId && !workspaceSlug) return interfaces.respondFailure(`Param "workspace" (ID or SLUG) is invalid`);

			const wsFilter: any = {};
			if (workspaceId) wsFilter._id = workspaceId;
			if (workspaceSlug) wsFilter.slug = workspaceSlug;

			// find the workspace
			const workspaceSvc = new WorkspaceService();
			const workspace = await workspaceSvc.findOne(wsFilter);
			if (!workspace) throw new Error(`Workspace not found.`);

			// console.dir(workspace, { depth: 10 });

			workspaceId = MongoDB.toString(workspace._id);

			// find the user
			let user = await this.service.findOne({ _id: userId, workspaces: workspaceId }, { populate: ["roles"] });
			if (!user) throw new Error(`User not found.`);
			// console.dir(user, { depth: 10 });

			const wsId = workspaceId;
			const workspaceIds = user.workspaces || [];
			const isUserInWorkspace = workspaceIds.includes(wsId);

			// check if this is a private workspace:
			if (!workspace.public) {
				// if this user hasn't joined yet:
				if (!isUserInWorkspace) throw new Error(`This workspace is private, you need an invitation to access.`);
			}

			// add this workspace to user's workspace list
			if (!isUserInWorkspace) workspaceIds.push(workspaceId);

			// set active workspace of this user -> this workspace
			user = await this.service.updateOne({ _id: userId }, { activeWorkspace: workspaceId, workspaces: workspaceIds }, this.options);

			// set active role
			const activeRole = await getActiveRole(user, workspace, { makeActive: true, assignMember: true });
			user.activeRole = activeRole;

			// return the updated user:
			return interfaces.respondSuccess({ data: user });
		} catch (e) {
			console.log(e);
			return interfaces.respondFailure({ msg: "Failed to join a workspace." });
		}
	}
}
