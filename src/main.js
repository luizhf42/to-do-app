"use strict";
import { Todo } from "./modules/todoMethods";
import { validate, input } from "./modules/validateTask";
import { addButton } from "./modules/addTodos";
import { concludedCheckbox } from "./modules/addDoneTasks";
import { loadLists } from "./modules/loadFromLocalStorage";

loadLists();

const todo = new Todo();
todo.configureMethods();

addButton.addEventListener("click", function (event) {
  event.preventDefault();

  const isTodoValid = validate();
  const taskText = input.value;
  if (isTodoValid) {
    input.classList.remove("empty-input");

    if (concludedCheckbox.checked) todo.createDoneTask(taskText);
    else todo.createTodo(taskText);

    input.value = "";
  } else {
    input.classList.add("empty-input");
  }
});

// to update the delete, done and undo buttons event listeners when a task is added, check if the list is empty and also save it all in the localStorage
const lists = document.querySelectorAll("ul");
const config = {
  attributes: true,
  childList: true,
  characterData: true,
  subtree: true,
};
const callback = () => {
  setTimeout(todo.configureMethods());
};

const observer = new MutationObserver(callback);

for (let i = 0; i < lists.length; i++) {
  observer.observe(lists[i], config);
}
