import { Todo } from "./todoMethods";
import { addButton } from "./addTodos";

addButton.addEventListener("click", function(event) {
  event.preventDefault();
  const todo = new Todo();
  todo.createTodo();
});
