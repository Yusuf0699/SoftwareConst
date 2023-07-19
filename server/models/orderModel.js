const mongoose = require("mongoose");
const Customer = require("./customerModel");
const Item = require("./itemModel"); 
const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  items: [{
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
      required: true,
    },
    quantity: {
      type: mongoose.Schema.Types.Number,
      required: true,
    },
  }],
  orderDate: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Order", orderSchema);