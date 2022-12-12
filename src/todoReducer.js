export default function todoReducer(todos, action) {
  switch (action.type) {
    case "add":
      const { newTodo } = action;
      return [...todos, newTodo];

    case "change":
      const { changeTodo } = action;
      return todos.map((todo) => {
        if (todo.id === changeTodo.id) return changeTodo;
        else return todo;
      });

    case "delete":
      const { removeId } = action;
      return todos.filter((todo) => todo.id !== removeId);
  }
}
