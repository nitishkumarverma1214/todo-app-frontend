import React, { useState } from "react";
import { useDispatch } from "./TodoContext";

function AddTodo() {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  const handleClick = () => {
    fetch(import.meta.env.VITE_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      crossDomain: true,
      body: JSON.stringify({ text: todoText }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "add",
          newTodo: data,
        });
        setTodoText("");
      });
  };

  return (
    <div className="add-todo-bar">
      <input
        className="new-todo-input"
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />{" "}
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default AddTodo;
