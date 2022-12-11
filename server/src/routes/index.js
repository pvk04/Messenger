import { Router } from "express";
import { personRouter } from "./person.js";
import { messagesRouter } from "./messages.js";

export const appRouter = Router();
appRouter.use("/person", personRouter);
appRouter.use("/messages", messagesRouter);
