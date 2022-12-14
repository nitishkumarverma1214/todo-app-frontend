import React from "react";
import { useDispatch, useTodos } from "./TodoContext";
import bin from "./assets/bin.svg";
function TodoList() {
  const todos = useTodos();

  return (
    <ul className="todo-list">
      {todos &&
        todos.length > 0 &&
        todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <Todo todo={todo} />
          </li>
        ))}
    </ul>
  );
}

function Todo({ todo }) {
  const dispatch = useDispatch();

  const handleCheckboxToggle = (done, todo) => {
    fetch(import.meta.env.VITE_BASE_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      crossDomain: true,
      body: JSON.stringify({ done, id: todo.id }),
    })
      .then((response) => {
        dispatch({
          type: "change",
          changeTodo: { ...todo, done },
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <input
        type="checkbox"
        name={`${todo.id}-done`}
        id={`${todo.id}-done`}
        checked={todo.done}
        onChange={(e) => handleCheckboxToggle(e.target.checked, todo)}
      />
      <div className="todo-text">{todo.text}</div>

      <button
        className="bin-icon"
        onClick={() => dispatch({ type: "delete", removeId: todo.id })}
      >
        <img src={bin} alt="delete" />
      </button>
    </>
  );
}

export default TodoList;
