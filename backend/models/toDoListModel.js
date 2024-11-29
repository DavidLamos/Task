const mongoose = require("mongoose");

const toDoListSchema = new mongoose.Schema({
  userName: {
    type: String,
    default: "User",
  },
  description: {
    type: String,
    default: "",
  },
  agreeCount: {
    type: Number,
    default: 0,
  },
  commentCount: {
    type: Number,
    default: 0,
  },
  datetime: {
    type: Date,
    default: Date.now,
  },
  commentList: [
    {
      comment: {
        type: String,
        required: true,
      },
      sender: {
        type: String,
        default: "Ximon Peter",
      },
    },
  ],
});

module.exports = mongoose.model("toDoList", toDoListSchema);
