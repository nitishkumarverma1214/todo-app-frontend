import React, { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import todoReducer from "./todoReducer";

export const DispatchContext = createContext(null);
export const TodoContext = createContext(null);

function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, []);
  useEffect(() => {
    fetch(import.meta.env.VITE_BASE_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      crossDomain: true,
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "create",
          todoList: data,
        });
      });
  }, []);

  return (
    <>
      <TodoContext.Provider value={todos}>
        <DispatchContext.Provider value={dispatch}>
          {children}
        </DispatchContext.Provider>
      </TodoContext.Provider>
    </>
  );
}

export default TodoProvider;

export const useDispatch = () => useContext(DispatchContext);
export const useTodos = () => useContext(TodoContext);
