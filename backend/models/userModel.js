const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    default: "User",
  },
  isLogin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Users", userSchema);
