var express = require("express");
var app = express();

var cors = require("cors");
var db = require("./DB/db");
var Todos = require("./module/todo");

app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.send("Welcome to JavaTpoint!");
});

app.post("/addToDo", async function (req, res) {
  try {
    console.log("req :: ", req.body);
    let { title = "", status = "P", author = null } = req.body;
    const newTodos = new Todos({
      title: title,
      status: status,
      timestampe: new Date(),
      author: author,
    });
    let responseData = await newTodos.save();
    res.status(200).send(responseData);
  } catch (Err) {
    console.log("Err", Err);
    res.status(400).send("error aavi error aavi :: ");
  }
});

app.get("/getAllTodos", async function (req, res) {
  try {
    const allToDosData = await Todos.find({});
    res.status(200).send(allToDosData);
  } catch (Err) {
    console.log("Err", Err);
    res.status(400).send("error aavi error aavi :: ");
  }
});

app.patch("/todo/:id", async (request, response) => {
  try {
    await Todos.findByIdAndUpdate(request.params.id, request.body);
    response.send(request.body);
  } catch (error) {
    console.log("error :: ", error);
    response.status(400).send(error);
  }
});

app.delete("/todo", function (req, res) {
  res.send("Welcome to JavaTpoint!");
});

let server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
