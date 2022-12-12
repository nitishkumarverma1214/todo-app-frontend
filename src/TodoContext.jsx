import React, { createContext, useContext, useReducer } from "react";
import todoReducer from "./todoReducer";

const initialTodo = [
  {
    id: 1,
    text: "make bed",
    done: true,
  },
  {
    id: 2,
    text: "sleep on time",
    done: false,
  },
];

export const DispatchContext = createContext(null);
export const TodoContext = createContext(null);

function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, initialTodo);
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
