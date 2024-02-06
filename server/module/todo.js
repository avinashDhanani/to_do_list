const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    timestampe: { type: Date, default: null },
    status: { type: String, default: "P" },
    author: { type: String, default: null },
  },
  { timestamps: true }
);

const Todos = mongoose.model("Todos", ToDoSchema); 
module.exports = Todos; 
