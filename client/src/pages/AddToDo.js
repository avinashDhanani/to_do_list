import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "../components/common/Container.js";
import axios from "axios";
import { useEffect, useState } from "react";

function AddToDo() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const todoAddSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        title: title,
        status: "P",
        author: author,
      };
      const data = await axios.post("http://localhost:8000/addToDo", userData);
      console.log("data :: ", data);
    } catch (err) {
      console.log("err :: ", err);
    }
  };
  return (
    <Form
      onSubmit={todoAddSubmitHandler}
      style={{
        width: "500px",
        margin: "auto",
        padding : "20px",
        borderRadius : "10px",
        marginTop: "50px",
        border : "1px solid black"
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => {
            if (e?.target?.value) setTitle(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Description"
          value={author}
          onChange={(e) => {
            if (e?.target?.value) setAuthor(e.target.value);
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="w-100">
        Submit
      </Button>
    </Form>
  );
}

export default AddToDo;
