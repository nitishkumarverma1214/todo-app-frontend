import React from "react";
import { useDispatch, useTodos } from "./TodoContext";

function TodoList() {
  const todos = useTodos();

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  );
}

function Todo({ todo }) {
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="checkbox"
        name={`${todo.id}-done`}
        id={`${todo.id}-done`}
        checked={todo.done}
        onChange={(e) => {
          dispatch({
            type: "change",
            changeTodo: { ...todo, done: e.target.checked },
          });
        }}
      />
      {todo.text}

      <button onClick={() => dispatch({ type: "delete", removeId: todo.id })}>
        X
      </button>
    </>
  );
}

export default TodoList;
