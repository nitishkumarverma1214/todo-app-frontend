import React, { useState } from "react";
import { useDispatch } from "./TodoContext";

let nextId = 3;
function AddTodo() {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />{" "}
      <button
        onClick={() => {
          dispatch({
            type: "add",
            newTodo: { id: nextId++, text: todoText, done: false },
          });
          setTodoText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
