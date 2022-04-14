import React from "react";
import "./App.css";
function ToDo({ todo, handleToggle }) {
  const handleClick = (event) => {
    event.preventDefault();
    handleToggle(event.currentTarget.id);
  };

  return (
    <div
      id={todo.id}
      key={todo.id + todo.task}
      name="todo"
      value={todo.id}
      onClick={handleClick}
      className={todo.complete ? "todo strike" : "todo"}
    >
      {todo.task}
    </div>
  );
}

export default ToDo;
