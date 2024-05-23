const mongoose = require("mongoose");
const transportationSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    truckNumber: { type: String, required: true },
    pickup: { type: String, required: true },
    dropoff: String,
    gain: String,
    assingTo: String,
    phone: Number,
    date: String,
    time: String,
    status: Array,
  },
  { timestamps: true }
);

const Transportation = mongoose.model("transportation", transportationSchema);

module.exports = Transportation;
