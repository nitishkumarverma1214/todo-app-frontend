export default function todoReducer(todos, action) {
  switch (action.type) {
    case "create":
      return action.todoList;
    case "add":
      let { newTodo } = action;

      return [...todos, newTodo];

    case "change":
      const { changeTodo } = action;

      return todos.map((todo) => {
        if (todo.id === changeTodo.id) return changeTodo;
        else return todo;
      });

    case "delete":
      const { removeId } = action;
      const deleteTodo = async () => {
        let request = await fetch(
          `${import.meta.env.VITE_BASE_URL}/${removeId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            crossDomain: true,
          }
        );
        let message = await request.text();
        console.log(message);
      };
      deleteTodo();
      return todos.filter((todo) => todo.id !== removeId);
  }
}
