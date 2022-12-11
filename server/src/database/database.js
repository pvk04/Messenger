import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
	host: "localhost",
	user: "root",
	database: "messenger",
	password: "5V;Az2K{v+T@JC7q",
});

export default connection;
