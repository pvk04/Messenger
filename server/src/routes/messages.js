import { Router } from "express";
import { messagesController } from "../controllers/messages.js";

export const messagesRouter = Router();

messagesRouter.get("/:chatId", messagesController.getChatMessages);
messagesRouter.get("/:chatId/:personId/unread", messagesController.unreadCount);
messagesRouter.get("/:personId/chats", messagesController.getChats);
messagesRouter.post("/:chatId/new", messagesController.newMessage);
messagesRouter.put("/:chatId/:personId/view", messagesController.viewMessages);
