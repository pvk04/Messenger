import { messagesService } from "../services/messages.js";

async function getChatMessages(req, res) {
	const { chatId } = req.params;
	const response = await messagesService.getChatMessages(chatId);
	res.json(response);
}

async function newMessage(req, res) {
	const { chatId } = req.params;
	const message = req.body;
	const response = await messagesService.newMessage(chatId, message);
	res.json(response);
}

async function viewMessages(req, res) {
	const { chatId } = req.params;
	const { personId } = req.params;
	const response = await messagesService.viewMessages(chatId, personId);
	res.json(response);
}

async function unreadCount(req, res) {
	const { chatId } = req.params;
	const { personId } = req.params;
	const response = await messagesService.unreadCount(chatId, personId);
	res.json(response);
}

async function getChats(req, res) {
	const { personId } = req.params;
	const response = await messagesService.getChats(personId);
	let result = await response.map(
		({ chatId, senderId, recieverId, content, createAt }) => {
			return {
				href: chatId,
				personId: senderId != personId ? senderId : recieverId,
				message: content,
				date: createAt,
			};
		}
	);
	return res.json(result);
}

export const messagesController = {
	getChatMessages,
	newMessage,
	viewMessages,
	unreadCount,
	getChats,
};
