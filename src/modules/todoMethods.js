import { addTodos } from "./addTodos";
import { addDoneTasks } from "./addDoneTasks";
import { deleteTask } from "./deleteTasks";
import { configureMarkAsDone } from "./markTodoAsDone";
import { configureUndoTask } from "./undoTask";
import { checkIfListIsEmpty } from "./emptyListMsg";


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

    checkIfListIsEmpty();
  }
}

export { Todo };
