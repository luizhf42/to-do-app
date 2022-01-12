const doneTasksList = document.querySelector(".done-list");
const concludedCheckbox = document.querySelector(".concluded-cb");
const doneTaskStructure =
  "<li class='done-task task'><span role='button' class='undo-btn task-btn'><img src='public/assets/images/undo.svg' alt class='undo-icon task-icon'/></span><span contenteditable class='task-text input done-task-text'>Access the To-do app</span><span role='button' class='delete-btn task-btn'><img src='public/assets/images/trash-can.svg' alt class='delete-icon task-icon'/></span></li>";

const addDoneTasks = (text) => {
  doneTasksList.innerHTML += doneTaskStructure;

  const newTodo = doneTasksList.lastChild;
  const doneTaskText = text;
  newTodo.children[1].innerText = doneTaskText;
};

export { doneTasksList, addDoneTasks, concludedCheckbox };
