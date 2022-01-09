const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  severity: {
    type: String,
  },
  component: {
    type: String,
  },
  context: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("log", LogSchema);
