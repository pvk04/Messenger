async function putViewMessages(chatId, accountId) {
	const result = await fetch(
		`http://localhost:5000/messages/${chatId}/${accountId}/view`,
		{
			method: "PUT",
			mode: "cors",
		}
	);

	return result;
}

export default putViewMessages;
