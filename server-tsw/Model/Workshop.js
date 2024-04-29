const mongoose = require("mongoose");
const workshopSchema = new mongoose.Schema({
  location: String,
  ownership: String,
  parts: [{ type: mongoose.Schema.Types.ObjectId, ref: "parts" }],
  mechanics: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Workshop = mongoose.model("workshop", workshopSchema);
module.exports = Workshop;
