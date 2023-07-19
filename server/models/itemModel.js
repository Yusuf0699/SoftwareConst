const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
	name: { type: String,
	 required: [true, "Food Name Is Required"],
	 unique: [true, "This Item Already Exist"]
	},
	description: { type: String,
	 required: [true, "Please Add Food Description"]
 },
	price: { type: Number,
	
	  required: [true,"Please Add a price number"] 
},
	quantity: { type: Number,
	 required: [true,"Add the number of the item "]
 },
 image: {
    data: Buffer,
    contentType: String,
  }



});

module.exports = mongoose.model("Item", itemSchema);