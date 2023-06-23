const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  id: {
    type: String,
    required: true,
    default: uuidv4(),
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    unique: false,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("users", userSchema);
