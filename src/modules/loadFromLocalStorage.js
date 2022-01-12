import { todoList } from "./addTodos";
import { doneTasksList } from "./addDoneTasks";

const loadLists = () => {
  const savedTodos = localStorage.getItem("todos");
  const savedDoneTasks = localStorage.getItem("doneTasks");
  
  todoList.innerHTML = savedTodos;
  doneTasksList.innerHTML = savedDoneTasks;
};

export { loadLists };
