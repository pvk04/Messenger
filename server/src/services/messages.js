import connection from "../database/database.js";

async function getChatMessages(chatId) {
	let [response] = await connection.query(
		`SELECT * FROM MESSAGES WHERE chatId =  ${chatId}`
	);
	return response;
}

async function newMessage(chatId, message) {
	let [response] = await connection.query(
		`insert into messages values (${chatId}, 1, ${message.senderId}, ${message.recieverId},'${message.content}', '2022-06-06 10:00', 0)`
	);
	return response;
}

async function viewMessages(chatId, personId) {
	let [response] = await connection.query(
		`update messages set isViewed = 1 where chatId = ${chatId} and recieverId = ${personId}`
	);
	return response;
}

async function unreadCount(chatId, personId) {
	let [response] = await connection.query(
		`select count(messageId) from messages where chatId = ${chatId} and recieverId = ${personId} and isViewed = 0`
	);
	return response;
}

async function getChats(personId) {
	let [response] = await connection.query(
		`select * from messages as mm where senderId = ${personId} or recieverId = ${personId} and messageId = (select max(messageId) from messages where chatId = mm.chatId) group by chatId`
	);
	return response;
}

export const messagesService = {
	getChatMessages,
	newMessage,
	viewMessages,
	unreadCount,
	getChats,
};
