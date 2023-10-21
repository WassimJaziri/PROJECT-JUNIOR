const mongoose = require("mongoose");
const db = require("./index.js");

const creditSchema = new mongoose.Schema({
  customerName: String,
  credit: Number,
  updatedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Credit = mongoose.model("Credit", creditSchema);
//Credit.create({ customerName: "customerName", credit: 124 });
module.exports = Credit;
