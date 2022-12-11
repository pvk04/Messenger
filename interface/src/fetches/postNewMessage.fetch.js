async function postNewMessage(chatId, message) {
	const result = await fetch(`http://localhost:5000/messages/${chatId}/new`, {
		method: "POST",
		body: JSON.stringify(message),
	});

	return result;
}

export default postNewMessage;
