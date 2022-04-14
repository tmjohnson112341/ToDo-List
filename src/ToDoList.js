import React from "react";
import ToDo from "./ToDo";
import "./App.css";

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
    <span id="list">
      {toDoList.map((todo) => {
        return <ToDo todo={todo} handleToggle={handleToggle} />;
      })}
    </span>
  );
};

export default ToDoList;
