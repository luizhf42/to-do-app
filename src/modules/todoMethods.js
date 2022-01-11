import { addTodos } from "./addTodos";
import { addDoneTasks } from "./addDoneTasks";
import { deleteTask } from "./deleteTasks";
import { configureMarkAsDone } from "./markTodoAsDone";
import { configureUndoTask } from "./undoTask";

class Todo {
  createTodo(text) {
    addTodos(text);
  }

  createDoneTask(text) {
    addDoneTasks(text);
  }

  configureMethods() {
    deleteTask();

    configureMarkAsDone();

    configureUndoTask();
  }
}

export { Todo };
