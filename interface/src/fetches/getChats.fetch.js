async function getChats(accountId) {
	const data = await fetch(
		`http://localhost:5000/messages/${accountId}/chats`,
		{
			method: "GET",
			redirect: "follow",
		}
	);
	const chats = JSON.parse(await data.text());

	return chats;
}

export default getChats;
