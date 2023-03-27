import type express from "express";

import { apiAccessTokenHandler } from "./auth-api-key";
import jwt_auth from "./auth-jwt";

export const authenticate = async (req: any, res: express.Response, next: express.NextFunction) => {
	// API_ACCESS_TOKEN will be transformed to lowercase in Express:
	const API_ACCESS_TOKEN = req.headers.api_access_token?.toString();

	if (API_ACCESS_TOKEN) {
		return apiAccessTokenHandler(req, res, next);
	} else {
		return jwt_auth(req, res, next);
	}
};
