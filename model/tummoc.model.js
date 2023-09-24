const mongoose = require("mongoose");

const tummocSchema = new mongoose.Schema(
  {
    rowId: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    strict: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("tummoc", tummocSchema, "tummoc");
