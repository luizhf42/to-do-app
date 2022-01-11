import { addTodos } from "./addTodos";

const configureUndoTask = () => {
  const doneTasks = document.querySelectorAll(".done-task");
  for (let i = 0; i < doneTasks.length; i++) {
    const undoButton = doneTasks[i].querySelector(".undo-btn");

    undoButton.removeEventListener("click", undoTask);
    undoButton.addEventListener("click", undoTask, false);
  }
};

const undoTask = (event) => {
  const todoText = event.currentTarget.parentElement.innerText;
  event.currentTarget.parentElement.remove();
  addTodos(todoText);
};

export { configureUndoTask };
