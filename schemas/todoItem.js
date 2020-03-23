const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var todoItemSchema = new Schema({
  title: String,
  completed: Boolean
});

const TodoItem = mongoose.model("TodoItem", todoItemSchema);

module.exports = TodoItem;
