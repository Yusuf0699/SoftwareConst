require("dotenv").config();
const mongoose = require("mongoose");

module.exports = () => {
	const connection = mongoose
		.connect(process.env.MONGODB_URI)
		.then((x) => {console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)})
		.catch((err) => console.log("could not connect to database"));
};
