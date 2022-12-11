import express, { json } from "express";
import cors from "cors";
import { appRouter } from "../src/routes/index.js";

const app = express();
const port = 5000;

app.use(
	json({
		type: ["application/json", "text/plain", "charset=utf-8"],
	}),
	cors()
);

app.use("/", appRouter);

app.listen(port, () => {
	console.log("SERVER STARTED AT PORT:", port);
});
