async function getChatMessages(id) {
	const data = await fetch(`http://localhost:5000/messages/${id}`, {
		method: "GET",
		redirect: "follow",
	});
	const result = JSON.parse(await data.text());
	return result;
}

export default getChatMessages;
