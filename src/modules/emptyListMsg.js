import { todoList } from "./addTodos";
import { doneTasksList } from "./addDoneTasks";

const noTodosMsg = document.querySelector(".todos > .empty-list-msg");
const noDoneTasksMsg = document.querySelector(".done > .empty-list-msg");

const checkIfListIsEmpty = () => {
  if (todoList.children.length) noTodosMsg.style.display = "none";
  else noTodosMsg.style.display = "block";

  if (doneTasksList.children.length) noDoneTasksMsg.style.display = "none";
  else noDoneTasksMsg.style.display = "block";
};

export { checkIfListIsEmpty };
