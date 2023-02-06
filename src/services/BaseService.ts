import { logError } from "diginext-utils/dist/console/log";
import { makeSlug } from "diginext-utils/dist/Slug";
import generatePassword from "diginext-utils/dist/string/generatePassword";
import { clearUnicodeCharacters } from "diginext-utils/dist/string/index";
import type { Request } from "express";

import type { EntityTarget, MongoRepository, ObjectLiteral } from "@/libs/typeorm";
import type { MongoFindManyOptions } from "@/libs/typeorm/find-options/mongodb/MongoFindManyOptions";
import { manager, query } from "@/modules/AppDatabase";
import { isValidObjectId } from "@/plugins/mongodb";

import type { IQueryFilter, IQueryOptions, IQueryPagination } from "../interfaces/IQuery";

/**
 * ![DANGEROUS]
 * This pass phrase is ONLY being used to empty a database,
 * and should not being used for production evironment.
 */
const EMPTY_PASS_PHRASE = "nguyhiemvcl";

export default class BaseService<E extends ObjectLiteral> {
	protected query: MongoRepository<ObjectLiteral>;

	req?: Request;

	constructor(entity: EntityTarget<E>) {
		this.query = query(entity);
	}

	async count(filter?: IQueryFilter, options?: IQueryOptions) {
		return this.query.count({ ...filter, ...options });
	}

	async create(data: E & { slug?: string; metadata?: any; error?: any }) {
		try {
			// generate slug (if needed)
			if (!data.slug && data.name) {
				let slug = makeSlug(data.name);
				const count = await this.count({ slug });
				if (count > 0) slug = makeSlug(data.name) + "-" + generatePassword(4, false).toLowerCase();

				data.slug = slug;
			}

			// generate metadata (for searching)
			data.metadata = {};
			for (const [key, value] of Object.entries(data)) {
				if (key != "_id" && key != "metadata" && key != "slug" && !isValidObjectId(value) && value)
					data.metadata[key] = clearUnicodeCharacters(value.toString());
			}

			const item = await this.query.create(data);

			return (await manager.save(item)) as E & { slug?: string; metadata?: any };
		} catch (e) {
			logError(e);
			return { error: e };
		}
	}

	async find(filter?: IQueryFilter, options?: IQueryOptions, pagination?: IQueryPagination): Promise<E[]> {
		// log(`Service > find :>> filter:`, filter);
		// const query = this.query;
		// let results;
		// log("options.populate >>", options.populate);
		// log("pagination >>", pagination);
		const findOptions: MongoFindManyOptions<ObjectLiteral> = {};

		// console.log({ filter });

		if (filter) findOptions.where = filter;
		if (options?.order) findOptions.order = options.order;
		if (options?.select && options.select.length > 0) findOptions.select = options.select;
		if (pagination?.page_size) findOptions.take = pagination.page_size;
		if (pagination?.current_page > 0 && pagination.page_size > 0) findOptions.skip = (pagination.current_page - 1) * pagination.page_size;

		if (options?.populate && options?.populate.length > 0) {
			findOptions.relations = {};
			options?.populate.map((popColumn) => {
				findOptions.relations[popColumn] = true;
			});
		}
		// log(`findOptions >>`, findOptions);

		const [results, totalItems] = await Promise.all([this.query.find(findOptions), this.query.count(filter)]);
		// log(`results >>`, results);

		if (pagination) {
			pagination.total_items = totalItems || results.length;
			pagination.total_pages = pagination.page_size ? Math.ceil(totalItems / pagination.page_size) : 1;

			const prevPage = pagination.current_page - 1 <= 0 ? 1 : pagination.current_page - 1;
			const nextPage =
				pagination.current_page + 1 > pagination.total_pages && pagination.total_pages != 0
					? pagination.total_pages
					: pagination.current_page + 1;

			pagination.prev_page =
				pagination.current_page != prevPage
					? `${this.req.protocol}://${this.req.get("host")}${this.req.baseUrl}${this.req.path}` +
					  "?" +
					  new URLSearchParams({ ...this.req.query, page: prevPage.toString(), size: pagination.page_size.toString() }).toString()
					: null;

			pagination.next_page =
				pagination.current_page != nextPage
					? `${this.req.protocol}://${this.req.get("host")}${this.req.baseUrl}${this.req.path}` +
					  "?" +
					  new URLSearchParams({ ...this.req.query, page: nextPage.toString(), size: pagination.page_size.toString() }).toString()
					: null;
		}

		return results as E[];
	}

	async findOne(filter?: IQueryFilter, options?: IQueryOptions) {
		// log(`findOne > filter :>>`, filter);
		const results = await this.find(filter, options);

		return results.length > 0 ? results[0] : null;
	}

	async update(filter: IQueryFilter, data: ObjectLiteral, options?: IQueryOptions) {
		// log(`update :>>`, { data });

		// generate slug (if needed)
		// ! danger: when update "name" only -> it generates new slug !
		// if (!data.slug && data.name) {
		// 	let slug = makeSlug(data.name);
		// 	const count = await this.count({ slug });
		// 	if (count > 0) slug = makeSlug(data.name) + "-" + generatePassword(4, false).toLowerCase();
		// 	data.slug = slug;
		// }

		// generate metadata (for searching)
		// TODO: update metadata instead of create new

		// data.metadata = {};
		// for (const [key, value] of Object.entries(data)) {
		// 	if (key != "_id" && key != "metadata" && key != "slug" && !isValidObjectId(value))
		// 		data.metadata[key] = clearUnicodeCharacters(value.toString());
		// }

		// console.log(`Service > UPDATE :>>`, { filter }, { data });

		const updateRes = await this.query.updateMany(filter, { $set: data });
		console.log(`Service > UPDATE :>>`, { filter }, { data }, { updateRes });
		if (updateRes.matchedCount > 0) {
			const results = await this.find(filter, options);
			return results;
		} else {
			return [];
		}
	}

	async softDelete(filter?: IQueryFilter) {
		// Manually update "deleteAt" to database since TypeORM MongoDB doesn't support "softDelete" yet
		const deleteRes = await this.query.updateMany(filter, { $set: { deletedAt: new Date() } });
		return { ok: deleteRes.matchedCount };

		/**
		 * MongoDB driver doesn't support "softDelete"
		 */
		// const deleteRes = await this.query.softDelete(filter);
		// console.log("deleteRes", deleteRes);
		// return deleteRes;
		// return null;
	}

	async delete(filter?: IQueryFilter) {
		const deleteRes = await this.query.deleteMany(filter);
		return deleteRes.result;
	}

	async empty(filter?: IQueryFilter) {
		if (filter?.pass != EMPTY_PASS_PHRASE) return { ok: 0, n: 0, error: "[DANGER] You need a password to process this, buddy!" };
		const deleteRes = await this.query.deleteMany({});
		return { ...deleteRes.result, error: null };
	}
}

export { BaseService };
