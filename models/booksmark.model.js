const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
  link: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  publisher: {
    type: String,
  },
  tagId: {
    type: String,
  },
  createdAt: {
    type: Number,
    default: Math.floor(new Date().getTime() / 1000),
  },
  updatedAt: {
    type: Number,
    default: Math.floor(new Date().getTime() / 1000),
  },
});

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);
module.exports = Bookmark;
