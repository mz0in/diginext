import { log } from "diginext-utils/dist/console/log";
import { isEmpty } from "lodash";

import { DIGINEXT_DOMAIN } from "@/config/const";
import type { Workspace } from "@/entities";
import { User } from "@/entities";
import { generateWorkspaceApiAccessToken, getUnexpiredAccessToken } from "@/plugins";

import { DB } from "../modules/api/DB";

export const migrateDefaultServiceAccountAndApiKeyUser = async () => {
	const workspaces = await DB.find<Workspace>("workspace", {});

	let affectedWs = 0;
	const results = await Promise.all(
		workspaces.map(async (ws) => {
			// find default Service Account of this workspace:
			const serviceAccounts = await DB.find<User>("service_account", { workspaces: { $in: [ws._id] } });
			if (isEmpty(serviceAccounts)) {
				log(`[MIGRATION] migrateDefaultServiceAccount() > Found "${ws.name}" workspace doesn't have any Service Account.`);

				const newToken = generateWorkspaceApiAccessToken();

				const saDto = new User();
				saDto.type = "service_account";
				saDto.name = "Default Service Account";
				saDto.email = `default.${newToken.name}@${ws.slug}.${DIGINEXT_DOMAIN}`;
				saDto.active = true;
				saDto.roles = [];
				saDto.workspaces = [ws._id];
				saDto.activeWorkspace = ws._id;
				saDto.token = getUnexpiredAccessToken(newToken.value);

				const saUser = await DB.create("service_account", saDto);
				if (saUser) log(`[MIGRATION] Workspace "${ws.name}" > Created "${saUser.name}" successfully.`);

				affectedWs++;
			}

			// find default API_KEY user of this workspace
			const apiKeyUsers = await DB.find<User>("api_key_user", { workspaces: { $in: [ws._id] } });
			if (isEmpty(apiKeyUsers)) {
				log(`[MIGRATION] migrateDefaultServiceAccount() > Found "${ws.name}" workspace doesn't have any default API_KEY user.`);

				const newToken = generateWorkspaceApiAccessToken();

				const apiUserDto = new User();
				apiUserDto.type = "api_key";
				apiUserDto.name = "Default API_KEY Account";
				apiUserDto.email = `api.${newToken.name}@${ws.slug}.${DIGINEXT_DOMAIN}`;
				apiUserDto.active = true;
				apiUserDto.roles = [];
				apiUserDto.workspaces = [ws._id];
				apiUserDto.activeWorkspace = ws._id;
				apiUserDto.token = getUnexpiredAccessToken(newToken.value);

				const apiKeyUser = await DB.create("api_key_user", apiUserDto);
				if (apiKeyUser) log(`[MIGRATION] Workspace "${ws.name}" > Created "${apiKeyUser.name}" successfully.`);

				affectedWs++;
			}
		})
	);

	if (affectedWs > 0) log(`[MIGRATION] migrateDefaultApiAccessToken() > FINISH MIGRATION >> Affected ${affectedWs} workspaces.`);

	return results;
};
