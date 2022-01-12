import { todoList } from "./addTodos";
import { doneTasksList } from "./addDoneTasks";

const saveInLocalStorage = () => {
  localStorage.setItem("todos", todoList.innerHTML);
  localStorage.setItem("doneTasks", doneTasksList.innerHTML);
};

export { saveInLocalStorage };
