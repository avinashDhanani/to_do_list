import React, { useEffect, useState } from "react";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Container from "../components/common/Container.js";

function Home() {
  const [arrTodos, setArrTodos] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        let response = await axios.get("http://localhost:8000/getAllTodos");
        if (response.status == "200" && response.data) {
          console.log("response :: ", response.data);
          setArrTodos([...response.data]);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const changeTodosStatus = async (_id = null, isCheck = false) => {
    if (!_id) {
      return null;
    }
    try {
      let data = await axios.patch(`http://localhost:8000/todo/${_id}`, {status : isCheck ? "C" : "P"});
      console.log("Data :: ",data)
      let tempTodos = [...arrTodos];
      tempTodos = tempTodos.map((item) => {
        if (item._id == _id) {
          item.status = isCheck ? "C" : "P";
        }
        return item;
      });
      setArrTodos([...tempTodos]);

      console.log("_id :: ", _id);
    } catch (err) {
      console.log("err :: ", err);
    }
  };

  return (
    <Container>
      <Todos data={arrTodos} changeTodosStatus={changeTodosStatus} />
    </Container>
  );
}

export default Home;

function Todos(props) {
  return (
    <ListGroup
      as="ol"
      style={{
        width: "500px",
        height: "500px",
        overflow: "scroll",
        overflowX: "hidden",
        margin: "auto",
        marginTop: "20px",
      }}
    >
      {props.data.map((item) => {
        return (
          <SingleTodo
            key={item._id}
            title={item.title}
            author={item.author}
            status={item.status}
            _id={item._id}
            changeTodosStatus={props.changeTodosStatus}
          />
        );
      })}
    </ListGroup>
  );
}

function SingleTodo(props) {
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <input
        type="checkbox"
        onChange={(e) => {
          props.changeTodosStatus(props._id, e.target.checked);
        }}
        checked={props.status == "P" ? false : true}
      />
      <div className="ms-2 me-auto">
        <div className="fw-bold">{props.title}</div>
        {props.author}
      </div>
      <Badge bg={props.status == "P" ? "warning" : "primary"} pill>
        {props.status == "P" ? "Pending" : "Completed"}
      </Badge>
    </ListGroup.Item>
  );
}
