import { addTodos } from "./addTodos";
import { addDoneTasks } from "./addDoneTasks";
import { configureDeleting } from "./deleteTasks";

class Todo {
  createTodo() {
    addTodos();
  }

  createDoneTask() {
    addDoneTasks();
  }

  deleteTask() {
    configureDeleting();
  }
}

export { Todo };
