const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type:Number, 
    default: new Date().getTime()
  },
  updatedAt:{
    type:Number,
    default: new Date().getTime()
  }
});

const Tag = mongoose.model("Tag", tagSchema);
module.exports = Tag;
