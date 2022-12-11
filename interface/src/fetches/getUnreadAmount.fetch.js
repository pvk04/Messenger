async function getUnreadAmount(href, personId) {
	const data = await fetch(
		`http://localhost:5000/messages/${href}/${personId}/unread`,
		{
			method: "GET",
			redirect: "follow",
		}
	);
	const unread = JSON.parse(await data.text());

	return unread[0]["count(messageId)"];
}

export default getUnreadAmount;
