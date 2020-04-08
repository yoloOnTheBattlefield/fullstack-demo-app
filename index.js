const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const TodoItem = require("./schemas/todoItem");

// https://mongoosejs.com/
mongoose.connect(
  "mongodb+srv://cristian:cristian@cluster0-xmgpx.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
// HTTP VERBES:
// GET
// POST
// PUT
// DELETE

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// Status descriptions
// 200: OK
// 500: INTERNAL SERVER ERROR
// 404: NOT FOUND
// 403: FORBIDEN

//We use this body parser to be able to access data that gets sent to us
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  // find everything that matches todo
  const response = TodoItem.find().then(data => res.send(data));
});

app.get("/get-item/:id", (req, res) => {
  // find an item that matches the _id key
  TodoItem.find({ _id: req.params.id }).then(data => res.send(data));
});

app.post("/add-item", (req, res) => {
  // adda a new item in the db

  console.log(req.body)
  const item = new TodoItem(req.body);
  item
    .save()
    .then(() => res.send(200))
    .catch(err => console.log(err));
});

app.put("/update-item/:id", (req, res) => {
  // update a specific item that matches _id with data from body
  TodoItem.update({ _id: req.params.id }, req.body).then(data => res.send(200));
});

app.delete("/remove-item/:id", (req, res) => {
  //remove an item tht matches _id
  TodoItem.remove({ _id: req.params.id }).then(data => res.send(200));
});

// run the server on port 5000
app.listen(5000, () => {
  console.log("server running!");
});
