import { addTodos } from "./addTodos";
import { addDoneTasks } from "./addDoneTasks";

class Todo {
  createTodo() {
    addTodos();
  }

  createDoneTask() {
    addDoneTasks();
  }
}

export { Todo };
