const mongoose = require("mongoose");

let url =
  "mongodb+srv://avinashdhanani1:avinash2808@cluster0.kc31ml9.mongodb.net/todo?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => console.log("Connected!"));
