const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
	TableId: {
		type: String
	},
	isReserved: {
		type: Boolean
	},
	TableCapacity: {
		type: Number,
		required: [true, "Enter Table Capacity"]
	}
});

module.exports = mongoose.model("Table", tableSchema);

// module.exports = mongoose.model("Table", tableSchema, "Tables");
