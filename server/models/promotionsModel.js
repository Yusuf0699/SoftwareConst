const mongoose = require("mongoose");
const Item = require("./itemModel");

const itemPromotionSchema = new mongoose.Schema({
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
    required: true,
  }],
  discount: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("ItemPromotion", itemPromotionSchema);
