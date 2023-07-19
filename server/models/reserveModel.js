const mongoose = require("mongoose");
const Customer = require("./customerModel");
const Table = require("./tableModel");
const reserveSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
  table: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Table",
    required: true,
  },
  reservationDate: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Reservation", reserveSchema);