// import { execa } from "execa";
import * as fs from "node:fs";

import chalk from "chalk";
import { randomUUID } from "crypto";
// import { compareVersions } from "compare-versions";
import dayjs from "dayjs";
import { makeDaySlug } from "diginext-utils/dist/string/makeDaySlug";
import { log, logError, logWarn } from "diginext-utils/dist/xconsole/log";
import dns from "dns";
import dotenv from "dotenv";
import { execa, execaCommand } from "execa";
import * as afs from "fs/promises";
import yaml from "js-yaml";
import _, { isArray, isEmpty, isString, toInteger, toNumber } from "lodash";
import * as m from "marked";
import TerminalRenderer from "marked-terminal";
import path from "path";
import type { SimpleGit, SimpleGitProgressEvent } from "simple-git";
import { simpleGit } from "simple-git";

import pkg from "@/../package.json";
import { cliOpts } from "@/config/config";
import type { AccessTokenInfo, IUser, IWorkspace } from "@/entities";
import type { AppConfig } from "@/interfaces/AppConfig";
import type { KubeEnvironmentVariable } from "@/interfaces/EnvironmentVariable";
import type { InputOptions } from "@/interfaces/InputOptions";
import type { GitProviderType } from "@/interfaces/SystemTypes";
import type { PullOrCloneGitRepoSSHOptions } from "@/modules/git/git-interfaces";
import { getCurrentGitBranch, isValidRepoURL, parseGitRepoDataFromRepoSSH, repoSshToRepoURL, repoUrlToRepoSSH } from "@/modules/git/git-utils";

import { DIGITOP_CDN_URL, HOME_DIR } from "../config/const";
import { MongoDB } from "./mongodb";
import { checkMonorepo } from "./monorepo";
import { isNumeric } from "./number";
import { isWin } from "./os";

const { marked } = m;
marked.setOptions({ renderer: new TerminalRenderer() });

export function nowStr() {
	return dayjs().format("YYYY-MM-DD HH:mm:ss");
}

/**
 * Delay/wait a specific miliseconds
 * @param i - waiting time in miliseconds
 * @param exec - callback function
 */
const wait = async function (i: number = 100, exec?: any) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			try {
				if (exec) exec();
				resolve(true);
			} catch (e) {
				reject(e);
			}
		}, i);
	});
};

/**
 * Wait until a condition is matched
 * @param condition - Condition
 * @param interval - Re-check interval in seconds @default 10
 * @param maxWaitingTime - Max waiting time in seconds @default 30 minutes (30 * 60 = 1.800 seconds)
 */
export async function waitUntil(condition: Function, interval: number = 10, maxWaitTime: number = 30 * 60 * 1000) {
	let timeWaited = 0;
	while (timeWaited < maxWaitTime) {
		const conditionMet = await condition();
		if (conditionMet) {
			return true;
		}
		await new Promise((resolve) => setTimeout(resolve, interval * 1000));
		timeWaited += interval;
	}
	return false;
}

async function logBitbucket(title, message, delay) {
	if (delay) await wait(delay);
	console.log(chalk.yellow("====== [BITBUCKET: " + title + "] ======"));
	console.log(message);
	process.exit(1);
}

export const readJson = (filePath) => {
	const jsonContent = fs.readFileSync(filePath).toString();
	return JSON.parse(jsonContent);
};

export type SaveJsonOptions = { overwrite?: boolean; beautify?: boolean };

export const saveJson = (data: string | any, filePath: string, options: SaveJsonOptions = {}) => {
	const { overwrite = false, beautify = true } = options;
	let jsonContent = typeof data == "string" ? data : JSON.stringify(data);
	if (beautify) jsonContent = JSON.stringify(JSON.parse(jsonContent), null, 4);

	const fileExisted = fs.existsSync(filePath);

	if (fileExisted && !overwrite) {
		try {
			return JSON.parse(fs.readFileSync(filePath).toString());
		} catch (e) {
			logWarn(`FILE_EXISTED >`, e);
			return {};
		}
	}

	fs.writeFileSync(filePath, jsonContent, "utf8");
	return JSON.parse(jsonContent);
};

export const showDocs = async (filePath: string) => {
	// const cliMd = await importEsm("cli-markdown", module);
	// console.log("cliMd :>> ", cliMd);
	const content = await afs.readFile(filePath, "utf8");
	log(marked(content));
	// log(cliMd(content));
	return content;
};

/**
 * Create temporary file with provided content
 * @param fileName - File name (include the extension)
 * @param content - Content of the file
 * @returns Path to the file
 */
export const createTmpFile = (
	fileName: string,
	content: string,
	options: { recursive?: boolean; encoding?: BufferEncoding } = { recursive: true, encoding: "utf8" }
) => {
	const { encoding, recursive } = options;

	const tmpDir = path.resolve(HOME_DIR, `tmp/${makeDaySlug({ divider: "" })}`);
	if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive });

	const tmpFilePath = path.resolve(tmpDir, fileName);
	fs.writeFileSync(tmpFilePath, content, encoding);

	return tmpFilePath;
};

/**
 * Convert string-array-like to array
 * @example "1" -> ["1"] | "123,555,abc,def" -> ["123","555","abc","def"]
 */
export const stringToArray = (
	str: string,
	options: {
		/**
		 * Convert items to number if it's valid
		 * @default false
		 * @example "1,a,2" -> [1, "a", 2]
		 */
		typeTransform?: boolean;
		/**
		 * @default ","
		 */
		divider?: string;
	} = { typeTransform: false, divider: "," }
) => {
	const { typeTransform = false, divider = "," } = options;
	const arr = str.indexOf(divider) === -1 ? [str] : str.split(divider);
	return typeTransform ? arr.map((item) => (isNumeric(item) ? toNumber(item) : item)) : arr;
};

/**
 * Get full name of the environment, such as: `development`, `production` (instead of `dev`, `prod`)
 * @param {String} env
 * @returns {String}
 */
export const getLongEnv = (env) => {
	if (env == "dev") {
		return "development";
	} else if (env == "prod") {
		return "production";
	} else if (env == "cana") {
		return "canary";
	} else if (env == "stag") {
		return "staging";
	} else {
		return env;
	}
};

/**
 * @param  {String} filePath
 * @param  {[{keyword:(RegExp|String), replacement:String}]} replacement=[]
 * @return {String} - New content
 */
export const replaceInFile = async (filePath, replacement: { keyword: RegExp | string; replacement: string }[] = []) => {
	let fileContent = fs.readFileSync(filePath, "utf-8");
	replacement.forEach(({ keyword, replacement: replaceWith }) => {
		fileContent = fileContent.replace(keyword, replaceWith);
	});
	fs.writeFileSync(filePath, fileContent, "utf8");
	return fileContent;
};

function toBase64(str) {
	return Buffer.from(str).toString("base64");
}

export function logVersion() {
	console.warn(chalk.bgWhite(chalk.bold(chalk.black(` [ Diginext CLI - v${pkg.version} | ${nowStr()} ] `))));
}

type ErrorCallback = (e: string) => void;

export type CmdOptions = { isDebugging?: boolean; onProgress?: (msg: string) => void };
export const progressCmd = async (command: string, options?: CmdOptions) => {
	if (options?.isDebugging) console.log("Processing command :>> ", command);
	const stream = execaCommand(command);
	let stdout: string = "";
	stream.stdio.forEach((_stdio) => {
		if (_stdio) {
			_stdio.on("data", (data) => {
				let logMsg = data.toString();
				stdout += logMsg;
				if (options?.isDebugging && logMsg) console.log(logMsg);
				if (options?.onProgress && logMsg) options?.onProgress(logMsg);
			});
		}
	});
	const end = await stream;
	return stdout || end.stdout;
};

export async function execCmd(cmd: string, errorMsgOrCallback: string | ErrorCallback = "") {
	try {
		let { stdout } = await execaCommand(cmd, cliOpts);
		// console.log(`[execCmd]`, { stdout });
		return stdout;
	} catch (e) {
		if (typeof errorMsgOrCallback == "string") {
			const errorMsg = errorMsgOrCallback;
			if (errorMsg != "") {
				logError(`${errorMsg} > ${e.stack}`);
			} else {
				logWarn(`[FAILED_BUT_IGNORE] ${e.message}`);
			}
			return;
		} else {
			// if it's a callback function
			try {
				errorMsgOrCallback(e);
			} catch (f) {
				logWarn(`[FAILED_BUT_IGNORE] ${f.message}`);
				return;
			}
		}
	}
}

/**
 * Get current CLI version
 */
export function currentVersion() {
	return pkg.version;
}

/**
 * Get latest version of the CLI from NPM
 */
export async function getLatestCliVersion() {
	const latestVersion = await execCmd(`npm show ${pkg.name} version`);
	return latestVersion;
}

/**
 * Check if CLI version is latest or not, if not -> return FALSE
 */
export async function shouldNotifyCliUpdate() {
	const curVersion = currentVersion();
	if (curVersion.indexOf("prerelease") > -1) return false;

	const latestVersion = await getLatestCliVersion();

	let [lastestBreaking, lastestFeature, lastestPatch] = latestVersion.split(".").map((num) => toInteger(num));
	let [curBreaking, curFeature, curPatch] = curVersion.split(".").map((num) => toInteger(num));

	if (lastestBreaking > curBreaking) return false; // no need to notify when there is a new breaking change version
	if (lastestBreaking === curBreaking && lastestFeature > curFeature) return true;
	if (lastestBreaking === curBreaking && lastestFeature === curFeature && lastestPatch > curPatch) return true;

	return false;
}

async function logBitbucketError(error: any, delay?: number, location?: string, shouldExit = false) {
	if (delay) await wait(delay);

	try {
		delete error.request.request;
	} catch (e) {}

	console.error(error);
	const errMsg = error.message ? error.message : error.error.message;
	const reason = error.error && error.error.error && error.error.error.fields ? error.error.error.fields : error.error.error.message;
	console.error(chalk.red(`[ERROR ${error.status}: ${errMsg} | ${nowStr()}]`));
	console.error(chalk.yellow("[REASON]"), reason);
	if (location) console.error(chalk.yellow("[LOCATION]"), location);
	console.error(error.request);
	if (shouldExit) process.exit(1);
}

export const parseRepoSlugFromUrl = (url) => {
	// https://digitop-duynguyen@bitbucket.org/digitopvn/diginext-cli.git
	let n = url.split("/").pop().split(".").shift();
	return n;
};

export const deleteFolderRecursive = async (dir: string) => {
	if (fs.existsSync(dir)) {
		// for (let entry of await afs.readdir(dir)) {
		// 	const filePath = path.resolve(dir, entry);
		// 	// use "unlink" to delete every single file
		// 	if ((await afs.lstat(filePath)).isDirectory()) await deleteFolderRecursive(filePath);
		// 	else await afs.unlink(filePath);
		// }
		// remove the directory itself
		await afs.rm(dir, { recursive: true, force: true });
	}
};

/**
 * Flatten the object into 1-level-object (with key paths)
 * @example {a: {b: [{c: 1}, {c: 2}]}, e: 3} -> {"a.b[0].c": 1, "a.b[1].c": 2, "e": 3}
 */
export function flattenObjectToPost(object: any = {}, initialPathPrefix = "") {
	if (!object || typeof object !== "object") return [{ [initialPathPrefix]: object }];

	const prefix = initialPathPrefix ? (Array.isArray(object) ? initialPathPrefix : `${initialPathPrefix}`) : "";

	const _arr = Object.entries(object).flatMap(([key]) =>
		flattenObjectToPost(object[key], Array.isArray(object) ? `${prefix}[${key}]` : `${prefix}[${key}]`)
	);
	// console.log("_arr :>> ", _arr);

	if (isEmpty(_arr)) return {};

	const res = _arr.reduce((acc, _path) => ({ ...acc, ..._path }));
	// console.log("res :>> ", res);

	return res;
}

/**
 * Flatten the object into 1-level-object (with key paths)
 * @example {a: {b: [{c: 1}, {c: 2}]}, e: 3} -> {"a.b.0.c": 1, "a.b.1.c": 2, "e": 3}
 */
export function flattenObjectPaths(object: any = {}, initialPathPrefix = "") {
	if (!object || typeof object !== "object") return [{ [initialPathPrefix]: object }];

	const prefix = initialPathPrefix ? (Array.isArray(object) ? initialPathPrefix : `${initialPathPrefix}.`) : "";

	const _arr = Object.entries(object).flatMap(([key]) =>
		flattenObjectPaths(object[key], Array.isArray(object) ? `${prefix}.${key}` : `${prefix}${key}`)
	);
	// console.log("_arr :>> ", _arr);

	if (isEmpty(_arr)) return {};

	const res = _arr.reduce((acc, _path) => ({ ...acc, ..._path }));
	// console.log("res :>> ", res);

	return res;
}

type SaveOpts = {
	/**
	 * Absolute path to project directory
	 */
	directory?: string;
	/**
	 * Set to `TRUE` will create new `dx.json` file if not existed.
	 */
	create?: boolean;
	ignoreIfNotExisted?: boolean;
};

/**
 * Get object of project configuration from "dx.json"
 * @param  {String} [directory] - Absolute path to project directory
 */
export const getAppConfig = (directory?: string) => {
	const filePath = path.resolve(directory || process.cwd(), "dx.json");

	if (!fs.existsSync(filePath)) return;

	const cfg = readJson(filePath);
	return cfg as AppConfig;
};

/**
 * Save object of project configuration to "dx.json"
 * @param  {Object} appConfig - Object data of the config
 * @param  {SaveOpts} [options] - Save options
 * @param  {String} [options.directory] - Absolute path to project directory @default process.cwd()
 * @param  {Boolean} [options.create] - TRUE will create new file if not existed. @default false
 */
export const saveAppConfig = (appConfig: AppConfig, options: SaveOpts = { directory: process.cwd(), create: false }) => {
	const { directory, create } = options;
	const filePath = path.resolve(directory || process.cwd(), "dx.json");

	if (!create && !fs.existsSync(filePath)) logError(`Không tìm thấy "dx.json"`);

	if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

	const content = JSON.stringify(appConfig, null, 2);
	fs.writeFileSync(filePath, content, "utf8");

	return getAppConfig(directory);
};

/**
 * Update values of app config ("dx.json")
 * @param updatedData - updated data
 */
export const updateAppConfig = (updatedData: AppConfig, options: SaveOpts = {}) => {
	const { directory = process.cwd() } = options;
	const currentAppConfig = getAppConfig(directory);

	const updatedDataMap = flattenObjectPaths(updatedData);
	Object.entries(updatedDataMap).map(([keyPath, value]) => {
		_.set(currentAppConfig, keyPath, value);
	});

	saveAppConfig(currentAppConfig, { directory });

	return currentAppConfig;
};

/**
 * Get object of project configuration from "package.json"
 * @param  {Object} [options] - Options
 * @param  {String} [options.directory] - Absolute path to project directory
 * @param  {Boolean} [options.ignoreIfNotExisted] - TRUE ignore the error if not existed.
 * @return {Object}
 */
export const getPackageConfig = (options: SaveOpts) => {
	const { directory, ignoreIfNotExisted = true } = options;
	let shouldReturn = true;
	const filePath = path.resolve(directory || process.cwd(), "package.json");

	if (!fs.existsSync(filePath)) {
		if (ignoreIfNotExisted) {
			shouldReturn = false;
		} else {
			logError(`Không tìm thấy "package.json"`);
		}
	}

	return shouldReturn ? readJson(filePath) : {};
};

/**
 * Save object of project configuration to "package.json"
 * @param  {Object} _config - Object data of the config
 * @param  {SaveOpts} [options] - Options
 * @param  {String} [options.directory] - Absolute path to project directory
 * @param  {Boolean} [options.create] - TRUE will create new file if not existed.
 * @param  {Boolean} [options.ignoreIfNotExisted] - TRUE ignore the error if not existed.
 */
export const savePackageConfig = (_config, options: SaveOpts) => {
	const { directory, ignoreIfNotExisted } = options;

	let shouldWriteFile = true;
	const filePath = path.resolve(directory || process.cwd(), "package.json");

	if (!options.create && !fs.existsSync(filePath) && !ignoreIfNotExisted) {
		logError(`Không tìm thấy "package.json"`);
		shouldWriteFile = false;
	}

	if (shouldWriteFile) {
		const content = JSON.stringify(_config, null, 2);
		return fs.writeFileSync(filePath, content, "utf8");
	}
};

/**
 * Process `npm install` or `yarn install` or `pnpm install` on current directory
 */
export const installPackages = async () => {
	log(`Đang tiến hành cài đặt "package.json" mới...`);

	let areDependenciesInstalled = false;
	// Install dependencies
	try {
		await execa("yarn", ["install"]);
		// console.log(stdout);
		areDependenciesInstalled = true;
	} catch (e) {
		logWarn("YARN not found, switch to `npm install` instead.");
	}

	if (!areDependenciesInstalled) {
		let isOk;
		try {
			await execa("npm", ["install"]);
			isOk = true;
		} catch (e) {
			logError("NPM not found -> ", e);
			isOk = false;
		}
		return isOk;
	} else {
		return true;
	}
};

export const cloneGitRepo = async (repoSSH: string, dir: string, options: PullOrCloneGitRepoSSHOptions = {}) => {
	//
	let git: SimpleGit;

	const { onUpdate } = options;

	const onProgress = ({ method, stage, progress }: SimpleGitProgressEvent) => {
		const message = `git.${method} ${stage} stage ${progress}% complete`;
		if (onUpdate) onUpdate(message, progress);
	};

	if (fs.existsSync(dir)) {
		try {
			git = simpleGit(dir, { progress: onProgress });
			await git.clone(repoSSH, dir, ["--depth", "1"]);

			console.log("\ndone");
		} catch (e) {}
	}
};
//

export const pullOrCloneGitRepo = async (repoSSH: string, dir: string, branch: string, options: PullOrCloneGitRepoSSHOptions = {}) => {
	let git: SimpleGit;
	let success: boolean = false;

	if (options?.isDebugging) console.log("pullOrCloneGitRepo() > repoSSH :>> ", repoSSH);
	if (options?.isDebugging) console.log("pullOrCloneGitRepo() > dir :>> ", dir);
	if (options?.isDebugging) console.log("pullOrCloneGitRepo() > options :>> ", options);

	const onProgress = ({ method, stage, progress }: SimpleGitProgressEvent) => {
		const message = `git.${method} ${stage} stage ${progress}% complete`;
		if (options?.onUpdate) options?.onUpdate(message, progress);
	};

	if (options?.isDebugging) console.log("pullOrCloneGitRepo() > repoSSH :>> ", repoSSH);

	if (fs.existsSync(dir)) {
		try {
			if (options?.isDebugging) console.log("pullOrCloneGitRepo() > directory exists :>> try to PULL...");
			git = simpleGit(dir, { progress: onProgress });
			// -----------------------
			// ! DO NOT SET TO "FALSE"
			// -----------------------
			const remotes = ((await git.getRemotes(true)) || []).filter((remote) => remote.name === "origin");
			const originRemote = remotes[0] as any;
			if (!originRemote) throw new Error(`This directory doesn't have any git remotes.`);
			if (options?.isDebugging) console.log("originRemote :>> ", originRemote, `>`, { repoSSH });
			if (originRemote?.refs?.fetch !== repoSSH) await git.addRemote("origin", repoSSH);

			const curBranch = await getCurrentGitBranch(dir);
			await git.pull("origin", curBranch, ["--no-ff"]);

			// remove git on finish
			if (options?.removeGitOnFinish) await deleteFolderRecursive(path.join(dir, ".git"));
			if (options?.removeCIOnFinish) await deleteFolderRecursive(path.join(dir, ".github"));

			success = true;
		} catch (e) {
			if (options?.isDebugging) console.log("pullOrCloneGitRepo() > Failed to PULL :>> try to CLONE...", e);
			if (options?.onUpdate) options?.onUpdate(`Failed to pull "${repoSSH}" in "${dir}" directory (${e.message}) -> trying to clone new...`);

			try {
				// just for sure...
				await deleteFolderRecursive(dir);

				// for CLI create new app from a framework
				git = simpleGit({ progress: onProgress });

				await git.clone(repoSSH, dir, [`--branch=${branch}`, "--single-branch", "--depth=1"]);
				if (options?.isDebugging) console.log("pullOrCloneGitRepo() > Success to CLONE !");

				// remove git on finish
				if (options?.removeGitOnFinish) await deleteFolderRecursive(path.join(dir, ".git"));
				if (options?.removeCIOnFinish) await deleteFolderRecursive(path.join(dir, ".github"));

				success = true;
			} catch (e2) {
				if (options?.isDebugging) console.log("pullOrCloneGitRepo() > Failed to PULL & CLONE :>> ", e2);
				if (options?.onUpdate) options?.onUpdate(`Failed to clone "${repoSSH}" (${branch}) to "${dir}" directory: ${e2.message}`);
			}
		}
	} else {
		if (options?.isDebugging) console.log("pullOrCloneGitRepo() > directory NOT exists :>> try to CLONE...");
		if (options?.onUpdate) options?.onUpdate(`Cache source code not found. Cloning "${repoSSH}" (${branch}) to "${dir}" directory.`);

		try {
			git = simpleGit({ progress: onProgress });

			await git.clone(repoSSH, dir, [`--branch=${branch}`, "--single-branch", "--depth=1"]);
			if (options?.isDebugging) console.log("✅ pullOrCloneGitRepo() > Success to CLONE !");

			// remove git on finish
			if (options?.removeGitOnFinish) await deleteFolderRecursive(path.join(dir, ".git"));
			if (options?.removeCIOnFinish) await deleteFolderRecursive(path.join(dir, ".github"));

			success = true;
		} catch (e) {
			if (options?.isDebugging) console.log("pullOrCloneGitRepo() > Failed to CLONE !");
			if (options?.onUpdate) options?.onUpdate(`Failed to clone "${repoSSH}" (${branch}) to "${dir}" directory: ${e.message}`);
		}
	}

	return success;
};

/**
 * Get current remote SSH & URL
 */
export const getCurrentGitRepoData = async (dir = process.cwd(), options?: { isDebugging: boolean }) => {
	try {
		const git = simpleGit(dir, {
			baseDir: `${dir}`,
			binary: "git",
		});
		// -----------------------
		// ! DO NOT SET TO "FALSE"
		// -----------------------
		const remotes = await git.getRemotes(true);
		if (options?.isDebugging) {
			console.log("[CURRENT DIR] Current git > remotes :>>");
			console.dir(remotes, { depth: 10 });
		}

		const repoSshOrUrl = (remotes[0] as any)?.refs?.fetch;
		if (!repoSshOrUrl) return;
		if (options?.isDebugging) console.log("getCurrentGitRepoData() > repoSshOrUrl :>> ", repoSshOrUrl);

		const branch = await getCurrentGitBranch(dir);
		if (!branch) return;
		if (options?.isDebugging) console.log("getCurrentGitRepoData() > branch :>> ", branch);

		const repoSSH = isValidRepoURL(repoSshOrUrl) ? repoUrlToRepoSSH(repoSshOrUrl) : repoSshOrUrl;
		const repoURL = isValidRepoURL(repoSshOrUrl) ? repoSshOrUrl : repoSshToRepoURL(repoSshOrUrl);

		if (options?.isDebugging) {
			console.log("getCurrentGitRepoData() > repoSSH :>> ", repoSSH);
			console.log("getCurrentGitRepoData() > repoURL :>> ", repoURL);
		}
		const gitData = parseGitRepoDataFromRepoSSH(repoSSH);
		if (options?.isDebugging) console.log("getCurrentGitRepoData() > gitData :>> ", gitData);

		const { repoSlug: slug, providerType: provider, namespace, gitDomain, fullSlug } = gitData;

		return { repoSSH, repoURL, provider, slug, fullSlug, namespace, gitDomain, branch };
	} catch (e) {
		if (options?.isDebugging) console.warn(`getCurrentGitRepoData() > error :>>`, e.toString());
		return;
	}
};

export const getGitProviderFromRepoSSH = (repoSSH: string): GitProviderType => {
	if (repoSSH.indexOf("bitbucket") > -1) return "bitbucket";
	if (repoSSH.indexOf("github") > -1) return "github";
	// if (repoSSH.indexOf("gitlab") > -1) return "gitlab";
	return;
};

export const isUsingExpressjsFramework = (options) => {
	let val = false;
	const { error, appDirectory } = checkMonorepo(options);
	if (error) return val;

	// framework name
	const frameworkConfigPath = path.resolve(appDirectory || process.cwd(), "package.json");
	// TODO: check if using express js

	return val;
};

export const isUsingNodejsFramework = (options) => {
	let val = false;
	const { error, appDirectory } = checkMonorepo(options);
	if (error) return val;

	// framework name
	const frameworkConfigPath = path.resolve(appDirectory || process.cwd(), "package.json");

	return val;
};

export const isUsingDiginextFramework = async (options) => {
	let val = false;
	const { error, appDirectory } = checkMonorepo(options);
	if (error) return val;

	// framework name
	const frameworkConfigPath = path.resolve(appDirectory || process.cwd(), "package.json");

	if (fs.existsSync(frameworkConfigPath)) {
		const frameworkConfig = await import(frameworkConfigPath);
		val = frameworkConfig.dependencies && frameworkConfig.dependencies.hasOwnProperty("next");
	}

	return val;
};

export const isUsingDiginestAPIFramework = async (options) => {
	let val = false;
	const { error, appDirectory } = checkMonorepo(options);
	if (error) return val;

	// framework name
	const frameworkConfigPath = path.resolve(appDirectory || process.cwd(), "package.json");

	if (fs.existsSync(frameworkConfigPath)) {
		const frameworkConfig = await import(frameworkConfigPath);
		val = frameworkConfig.dependencies && frameworkConfig.dependencies.hasOwnProperty("@nestjs/core");
	}

	return val;
};

export const isUsingStaticHtmlFramework = async (options) => {
	let val = false;
	const { error, appDirectory } = checkMonorepo(options);
	if (error) return val;

	const frameworkConfigPath = path.resolve(appDirectory || process.cwd(), "dx.json");

	if (fs.existsSync(frameworkConfigPath)) {
		const frameworkConfig = await import(frameworkConfigPath);
		val = typeof frameworkConfig.framework != "undefined" && frameworkConfig.framework == "static";
	}

	return val;
};

/**
 * Get current using framework of the project.
 * @return {("unknown"|"diginest"|"diginext"|"nodejs"|"expressjs"|"static")}
 */
export const getCurrentFramework = (options) => {
	let val = "unknown";
	if (isUsingDiginextFramework(options)) val = "diginext";
	if (isUsingDiginestAPIFramework(options)) val = "diginest";
	if (isUsingNodejsFramework(options)) val = "nodejs";
	if (isUsingExpressjsFramework(options)) val = "expressjs";
	if (isUsingStaticHtmlFramework(options)) val = "static";
	return val;
};

export const getImageFromYaml = (docs) => {
	let value = "";
	docs.map((doc) => {
		// log("doc", doc);
		if (doc && doc.kind == "Deployment") {
			value = doc.spec.template.spec.containers[0].image;
		}
	});
	return value;
};

export const getReplicasFromYaml = (docs) => {
	let value = 1;
	docs.map((doc) => {
		// log("doc", doc);
		if (doc && doc.kind == "Deployment") {
			value = doc.spec.replicas;
		}
	});
	return value;
};

/**
 * Completely remove the first / of the string
 * @param {String} input
 * @returns {String}
 */
export const trimFirstSlash = (input) => {
	// trim first slash of BASE_PATH:
	let output = input;
	for (let i = 0; i < 10; i++) {
		if (output.length > 0 && output.charAt(0) == "/") output = output.substr(1);
	}
	return output;
};

/**
 * Convert {Object} to environment variables of Kuberketes container
 * @param {Object} object - Input raw object, **not containing any methods**
 */
export const objectToKubeEnvVars = (object: any) => {
	return Object.entries(object).map(([name, value]) => {
		return { name, value } as KubeEnvironmentVariable;
	});
};

/**
 * Convert {Object} to .env content
 * @param {Object} object - Input raw object, **not containing any methods**
 * @returns {String}
 */
export const objectToDotenv = (object) => {
	let content = "";
	for (let key in object) {
		let val = object[key];
		content += key + "=" + `"${val}"` + "\n";
	}
	return content;
};

/**
 * Load ENV file (.env.*) and parse to array of K8S container environment variables
 */
export const loadEnvFileAsContainerEnvVars = (filePath: string) => {
	const envObject = dotenv.config({ path: filePath }).parsed;
	if (isEmpty(envObject)) return [];
	return objectToKubeEnvVars(envObject);
};

/**
 * Grab value of Kube ENV variables by name
 */
export const getValueOfKubeEnvVarsByName = (name: string, envVars: KubeEnvironmentVariable[]) => {
	return envVars.find((envVar) => envVar.name === name)?.value;
};

/**
 * Convert K8S container's ENV to .env content
 * @param {[{name,value}]} inputEnvs - Input raw object, **not containing any methods**
 * @returns {String}
 */
export const kubeEnvToDotenv = (inputEnvs: KubeEnvironmentVariable[]) => {
	let content = "";
	inputEnvs.map((envVar) => {
		content += envVar.name + "=" + `"${envVar.value}"` + "\n";
	});
	return content;
};

export const objectToDeploymentYaml = (deploymentCfg) => {
	let deploymentContent = "";

	if (!isArray(deploymentCfg)) deploymentCfg = [deploymentCfg];

	deploymentCfg.map((doc) => {
		if (doc) {
			deploymentContent += yaml.dump(doc);
			deploymentContent += "\n---\n";
		}
	});

	return deploymentContent;
};

export const strToArray = (str, splitter = ",") => {
	let arr = [];
	if (str.indexOf(splitter) > -1) {
		arr = [...str.split(splitter)];
	} else {
		arr = [str];
	}
	return arr;
};

export const getDiginextEnvVars = (env, projectSlug, domains) => {
	let environment = "staging";
	if (env == "prod") environment = "production";
	return {
		NEXT_PUBLIC_ENV: environment,
		NEXT_PUBLIC_CDN_BASE_PATH: `${DIGITOP_CDN_URL}/${projectSlug}/${env}`,
		NEXT_PUBLIC_BASE_PATH: typeof domains != "undefined" && domains.length ? "" : projectSlug,
		NEXT_PUBLIC_BASE_URL: typeof domains != "undefined" && domains.length ? `https://${domains[0]}` : ``,
		IRON_SESSION_SECRET: "NcvPDa2tlje1i6nvzZt6PmCHU5qcTcx4",
	};
};

export const objToEnv = (obj = {}) => {
	let content = "";
	for (const [key, val] of Object.entries(obj)) {
		let value = val;
		if (isString(val)) value = `"${val}"`;
		content += `${key}=${value}\n`;
	}
	return content;
};

export const sequentialExec = async (array, func) => {
	if (typeof func == "undefined") {
		logWarn("Input function not defined.");
		return;
	}
	return array.reduce(async (previous, item) => {
		await func(item);
		return item;
	}, Promise.resolve([]));
};

interface ResolveApplicationFilePathOptions {
	targetDirectory?: string;
	env?: string;
	ignoreIfNotExisted?: boolean;
	msg?: string;
}

/**
 * Resolve a location path of the file within the application.
 */
export const resolveFilePath = (fileNamePrefix: string, options: ResolveApplicationFilePathOptions) => {
	const { targetDirectory = process.cwd(), env = "dev", ignoreIfNotExisted = false, msg } = options;

	let filePath = path.resolve(targetDirectory, `${fileNamePrefix}.${env}`);
	if (fs.existsSync(filePath)) return filePath;

	filePath = path.resolve(targetDirectory, `deployment/${fileNamePrefix}.${env}`);
	if (fs.existsSync(filePath)) return filePath;

	filePath = path.resolve(targetDirectory, fileNamePrefix);
	if (fs.existsSync(filePath)) return filePath;

	filePath = path.resolve(targetDirectory, `deployment/${fileNamePrefix}`);
	if (fs.existsSync(filePath)) return filePath;

	filePath = path.resolve(targetDirectory, fileNamePrefix);
	if (fs.existsSync(filePath)) return filePath;

	if (!ignoreIfNotExisted) {
		const message = msg ?? `Missing "./${fileNamePrefix}" file, are you in the project directory?`;
		throw new Error(message);
	} else {
		if (msg) logWarn(msg);
	}

	return;
};

/**
 * Resolve a location path of the "Dockerfile".
 */
export const resolveDockerfilePath = (options: ResolveApplicationFilePathOptions) => resolveFilePath("Dockerfile", options);

/**
 * Resolve a location path of the DOTENV (`.env.*`) file.
 */
export const resolveEnvFilePath = (options: ResolveApplicationFilePathOptions) => resolveFilePath(".env", options);

/**
 * Execute an command within a Docker container
 * @deprecated
 */
export const cliContainerExec = async (command, options) => {
	let getContainerName, cliContainerName;

	// restart the CLI container to update the environment:
	// if (!options.pipelineReady) {
	// 	await startPipeline([], options);
	// 	await wait(2000);
	// 	options.pipelineReady = true;
	// }

	if (isWin()) {
		getContainerName = await execaCommand(`docker ps --format '{{.Names}}' | findstr diginext-cli`);
	} else {
		getContainerName = await execaCommand(`docker ps --format '{{.Names}}' | grep diginext-cli`);
	}

	cliContainerName = getContainerName.stdout;
	log("[cliContainerExec] cliContainerName:", cliContainerName);

	if (cliContainerName) {
		if (options.isDebugging) {
			log(chalk.cyan("---------------- DIGINEXT-CLI DOCKER VERSION ------------------"));
			await execa("docker", ["exec", "-ti", cliContainerName, "docker", "-v"], { stdio: "inherit" });
			log(chalk.cyan("---------------- INSIDE DIGINEXT-CLI CONTAINER ----------------"));
			await execa("docker", ["exec", "-ti", cliContainerName, "ls"], { stdio: "inherit" });
			log(chalk.cyan("---------------------------------------"));
		}
		const args = command.split(" ");
		const { stdout } = await execa("docker", ["exec", "-ti", cliContainerName, ...args], {
			stdio: "inherit",
		});
		return stdout;
	} else {
		return false;
	}
};

async function logHelp(options?: InputOptions) {
	log(`Nothing... bwahahaha...`);
}

export const getIPFromDomain = async (domain) => {
	return new Promise((resolve, reject) => {
		dns.lookup(domain, (err, address, family) => {
			if (err) {
				logError(`${domain} chưa được trỏ về IP nào.`);
				reject(err);
			}
			resolve(address);
		});
	});
};

export const getClusterIP = async (options) => {
	let svcName = "nginx-ingress-controller",
		namespace = "nginx-ingress";

	let ingress, stdout;

	try {
		stdout = await cliContainerExec(`kubectl get svc/${svcName} -n ${namespace} -o json`, options);
		ingress = stdout ? JSON.parse(stdout) : null;
	} catch (e) {
		svcName = "ingress-nginx-controller";
		namespace = "ingress-nginx";

		stdout = await cliContainerExec(`kubectl get svc/${svcName} -n ${namespace} -o json`, options);
		ingress = stdout ? JSON.parse(stdout) : null;
	}

	return ingress ? ingress.status.loadBalancer.ingress[0].ip : null;
};

export const getIngress = async (ingName: string, namespace = "default", options = {}) => {
	let stdout = await cliContainerExec(`kubectl get ing/${ingName} -n ${namespace} -o json`, options);
	const ingress = stdout ? JSON.parse(stdout) : null;
	return ingress;
};

export const getIngressEndpoint = async (ingName: string, namespace = "default", options = {}) => {
	let ingress = await getIngress(ingName, namespace, options);
	return ingress.spec.rules[0].host;
};

export const getIngressIP = async (ingName: string, namespace = "default", index = 0, options = {}) => {
	let stdout = await cliContainerExec(`kubectl get ing/${ingName} -n ${namespace} -o json`, options);
	const ingress = stdout ? JSON.parse(stdout) : null;
	return ingress ? ingress.status.loadBalancer.ingress[index].ip : null;
};

export const getCurrentDeployment = async (deployName: string, namespace = "default", options = {}) => {
	let stdout = await cliContainerExec(`kubectl get deploy/${deployName} -n ${namespace} -o json`, options);
	if (typeof stdout == "string") {
		try {
			return JSON.parse(stdout);
		} catch (e) {
			return null;
		}
	} else {
		return null;
	}
};

export const getCurrentImageName = async (deployName: string, namespace = "default", options = {}) => {
	const deployObj = await getCurrentDeployment(deployName, namespace, options);
	return deployObj.spec.template.spec.containers[0].image || "";
};

export const getCurrentContainerEnvs = async (deployName: string, namespace = "default", options = {}) => {
	const deployObj = await getCurrentDeployment(deployName, namespace, options);
	return deployObj.spec.template.spec.containers[0].env || {};
};

export { logBitbucket, logBitbucketError, logHelp, toBase64, wait };

export const extractWorkspaceSlugFromUrl = (url: string) => {
	try {
		return url.split("//")[1].split(".")[0];
	} catch (e: any) {
		return;
	}
};

export const extractWorkspaceIdFromUser = (user: IUser) => {
	const workspaceId = (user.activeWorkspace as IWorkspace)._id
		? MongoDB.toString((user.activeWorkspace as IWorkspace)._id)
		: MongoDB.toString(user.activeWorkspace);

	return workspaceId;
};

export function getUnexpiredAccessToken(access_token: string) {
	let expiredDate = dayjs("2999-12-31");
	let expiredTimestamp = expiredDate.diff(dayjs());

	// assign "access_token" info to request:
	const token: AccessTokenInfo = {
		access_token,
		expiredTimestamp: expiredTimestamp,
		expiredDate: expiredDate.toDate(),
		expiredDateGTM7: expiredDate.format("YYYY-MM-DD HH:mm:ss"),
	};

	return token;
}

export const generateWorkspaceApiAccessToken = () => {
	const name = randomUUID();
	return { name, value: `${name}-${randomUUID()}` };
};
