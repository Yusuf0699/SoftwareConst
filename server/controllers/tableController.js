const Table = require("../models/tableModel");

// Display All table Data
const table_index = (req, res) => {
	Table.find(function (err, tables) {
		res.json(tables);
	});
};

// Create New table
const table_create_post = (req, res) => {
	let table = new Table(req.body);
	table
		.save()
		.then((table) => {
			res.send(table);
		})
		.catch(function (err) {
			res.status(422).send("Table add failed");
		});
};

// Show a particular Table Detail by Id
const table_details = (req, res) => {
	Table.findById(req.params.id, function (err, table) {
		if (!table) {
			res.status(404).send("No result found");
		} else {
			res.json(table);
		}
	});
};

// Update table Detail by Id
const table_update = (req, res) => {
	Table.findByIdAndUpdate(req.params.id, req.body)
		.then(function () {
			res.json("Table updated");
		})
		.catch(function (err) {
			res.status(422).send("Table update failed.");
		});
};

// Delete Table Detail by Id
const table_delete = (req, res) => {
	Table.findById(req.params.id, function (err, table) {
		if (!table) {
			res.status(404).send("Table not found");
		} else {
			Table.findByIdAndRemove(req.params.id)
				.then(function () {
					res.status(200).json("Table deleted");
				})
				.catch(function (err) {
					res.status(400).send("Table delete failed.");
				});
		}
	});
};

module.exports = {
	table_index,
	table_details,
	table_create_post,
	table_update,
	table_delete,
};
