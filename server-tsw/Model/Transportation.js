const mongoose = require("mongoose");
const transportationSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  vanNumber: { type: String, required: true },
  onLoad: { type: String, required: true },
  onBoard: String,
  status: Array,
  parts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Parts" }],
});

const Transportation = mongoose.model("transportation", transportationSchema);

module.exports = Transportation;
