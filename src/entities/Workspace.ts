import { Schema } from "mongoose";

import type { HiddenBodyKeys } from "@/interfaces";
import type { RetentionType } from "@/interfaces/SystemTypes";

import type { IBase } from "./Base";
import { baseSchemaDefinitions } from "./Base";

export interface IWorkspace extends IBase {
	/**
	 * Workspace name
	 */
	name?: string;
	/**
	 * Workspace slug: auto-generated by "name" column
	 * @readonly
	 */
	slug?: string;
	/**
	 * Is this a `public` workspace that anyone can join, otherwise it's a `private` workspace that needs approval on joining request.
	 */
	public?: boolean;
	/**
	 * Workspace profile picture
	 */
	image?: string;
	/**
	 * Workspace domain name
	 */
	domain?: string;
	/**
	 * Diginext API Key
	 */
	dx_key?: string;

	/**
	 * Workspace Settings
	 */
	settings?: {
		database?: any;
		database_backup?: {
			/**
			 * Data retention information
			 * - `type` is "duration", value is "miliseconds"
			 * - `type` is "limit", value is "MAX AMOUNT OF BACKUPS"
			 */
			retention?: {
				type: RetentionType;
				value: number;
			};
		};
		system_log?: {
			/**
			 * Data retention information
			 * - `type` is "duration", value is "miliseconds"
			 * - `type` is "limit", value is "MAX AMOUNT OF BACKUPS"
			 */
			retention?: {
				type: RetentionType;
				value: number;
			};
		};
	};
}

export type WorkspaceDto = Omit<IWorkspace, keyof HiddenBodyKeys>;

export const workspaceSchema = new Schema(
	{
		...baseSchemaDefinitions,
		name: { type: String },
		slug: { type: String },
		public: { type: Boolean },
		image: { type: String },
		domain: { type: String },
		dx_key: { type: String },
		owner: { type: Schema.Types.ObjectId, ref: "users" },
		settings: {
			database: Schema.Types.Mixed,
			database_backup: {
				retention: {
					type: { type: String },
					value: { type: Number },
				},
			},
			system_log: {
				retention: {
					type: { type: String },
					value: { type: Number },
				},
			},
		},
	},
	{ collection: "workspaces", timestamps: true }
);
