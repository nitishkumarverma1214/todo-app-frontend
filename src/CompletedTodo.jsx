import React from "react";
import { useTodos } from "./TodoContext";

function CompletedTodo() {
  const todos = useTodos();
  const completedTodos = todos?.length
    ? todos.filter((todo) => todo.done)
    : null;
  return (
    <div>
      <h1>Completed Todos</h1>
      {completedTodos?.length
        ? completedTodos.map((todo) => <p key={todo.id}>{todo.text}</p>)
        : "No Completed Todos"}
    </div>
  );
}

export default CompletedTodo;
