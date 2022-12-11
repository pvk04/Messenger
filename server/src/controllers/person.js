import { personService } from "../services/person.js";

async function getPerson(req, res) {
	const { personId } = req.params;
	const response = await personService.getPerson(personId);
	res.json(response);
}

async function getMe(req, res) {
	const { personId } = req.params;
	const response = await personService.getMe(personId);
	res.json(response);
}

export const personController = {
	getPerson,
	getMe,
};
