import { isJSON } from "class-validator";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { log, logWarn } from "diginext-utils/dist/console/log";
import { Response } from "diginext-utils/dist/response";
import express from "express";

import pkg from "@/../package.json";
import { Config } from "@/app.config";
import { sendLog } from "@/modules/build";
import { testBuild } from "@/modules/build/build";
import { startBuildV1 } from "@/modules/build/start-build";
import { execCmd } from "@/plugins";
// import userRouter from "./user";

const CLI_MODE = Config.grab("CLI_MODE", "client");

dayjs.extend(localizedFormat);

// initialize socket io server:
// let io;
// export const getIO = () => io;

// if (server) {
// 	io = new Server(server);
// 	global.socketServer = io;
// }

const router = express.Router();

/**
 * Default route - HOME
 */
router.get("/", (req, res) => {
	let str = "<h1>Diginext Build Server</h1>";
	str += "<li><em>Version: " + pkg.version + "</em></li>";
	str += "<li><em>Today: " + dayjs().format("LLLL") + "</em></li>";
	res.send(str);
});

/**
 * Health check route
 */
router.get("/healthz", (req, res) => Response.succeed(res));

/**
 * Register API routes
 */
if (CLI_MODE == "server") {
	logWarn(`You're running on SERVER mode.`);

	router.get("/hello", (req, res) => {
		res.status(200).json({ status: "Ok" });
	});

	router.get("/send-message", (req, res) => {
		const { room, message } = req.query;
		// log(io);
		// io.to("2021-08-18-18-33-20").emit("message", { action: "start", message: "Hello" });

		sendLog({ SOCKET_ROOM: room.toString(), message: message.toString() });

		res.send("done");
	});

	router.get("/build-test", (req, res) => {
		testBuild();
		res.send("done");
	});

	router.get("/docker/healthz", async (req, res) => {
		const resultJson = await execCmd(`docker version --format "{{json .}}"`);
		const result = resultJson && isJSON(resultJson) ? JSON.parse(resultJson) : {};
		res.status(200).json(result);
	});

	router.get("/docker/images", async (req, res) => {
		const resultStr = (await execCmd(`docker images --format "{{json .}}"`)) || "";
		const resultJson = "[" + resultStr.split("\n").join(",") + "]";
		const result = resultJson && isJSON(resultJson) ? JSON.parse(resultJson) : {};
		res.status(200).json(result);
	});

	router.get("/docker/containers", async (req, res) => {
		const resultStr = (await execCmd(`docker ps --format "{{json .}}"`)) || "";
		const resultJson = "[" + resultStr.split("\n").join(",") + "]";
		const result = resultJson && isJSON(resultJson) ? JSON.parse(resultJson) : {};
		res.status(200).json(result);
	});

	router.post("/deploy", (req, res) => {
		const { options } = req.body;

		// TODO: Save client CLI version to server database for tracking purpose!
		const cliOptions = JSON.parse(options);
		log("[DEPLOY] cliOptions", cliOptions);

		// check for version compatibility between CLI & SERVER:
		const cliVersion = cliOptions.version || "0.0.0";
		const breakingChangeVersionCli = cliVersion.split(".")[0];
		const serverVersion = pkg.version;
		const breakingChangeVersionServer = serverVersion.split(".")[0];

		if (breakingChangeVersionCli != breakingChangeVersionServer)
			res.status(200).json({
				status: 0,
				messages: [
					`Your CLI version (${cliVersion}) is much lower than the BUILD SERVER version (${serverVersion}). Please upgrade: "dx update"`,
				],
			});

		// start build in background:
		startBuildV1(cliOptions);

		res.status(200).json({ status: 1 });
	});
}

export default router;
