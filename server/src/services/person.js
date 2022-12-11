import connection from "../database/database.js";

async function getPerson(personId) {
	let [response] = await connection.execute(
		`SELECT concat(personName, ' ', personSurname) as name, isOnline, lastOnline FROM person WHERE personId = ${personId}`
	);
	return response;
}

async function getMe(personId) {
	let [response] = await connection.execute(
		`SELECT * FROM person WHERE personId = ${JSON.stringify(personId)}`
	);
	return response;
}

export const personService = {
	getPerson,
	getMe,
};
