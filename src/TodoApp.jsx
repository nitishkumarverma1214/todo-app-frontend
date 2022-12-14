import React from "react";
import AddTodo from "./AddTodo";
import CompletedTodo from "./CompletedTodo";
import TodoProvider from "./TodoContext";
import TodoList from "./TodoList";

function TodoApp() {
  return (
    <div>
      <TodoProvider>
        <h1 className="heading">Todo List</h1>
        <AddTodo />
        <TodoList />
        <CompletedTodo />
      </TodoProvider>
    </div>
  );
}

export default TodoApp;
