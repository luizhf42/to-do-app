import { addDoneTasks } from "./addDoneTasks";

const configureMarkAsDone = () => {
  const todos = document.querySelectorAll(".todo-task");
  for (let i = 0; i < todos.length; i++) {
    const doneButton = todos[i].querySelector(".done-btn");

    doneButton.removeEventListener("click", markAsDone);
    doneButton.addEventListener("click", markAsDone, false);
  }
};

const markAsDone = (event) => {
  const todoText = event.currentTarget.parentElement.innerText;
  event.currentTarget.parentElement.remove();
  addDoneTasks(todoText);
};

export { configureMarkAsDone };
