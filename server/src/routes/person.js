import { Router } from "express";
import { personController } from "../controllers/person.js";

export const personRouter = Router();

personRouter.get("/:personId", personController.getPerson);
personRouter.get("/me/:personId", personController.getMe);
