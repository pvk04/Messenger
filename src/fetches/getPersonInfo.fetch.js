async function getPersonInfo(personId) {
	const data = await fetch(`http://localhost:5000/person/${personId}`, {
		method: "GET",
		redirect: "follow",
	});
	const result = JSON.parse(await data.text());

	return result;
}

export default getPersonInfo;
