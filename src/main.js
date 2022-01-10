"use strict";
import { Todo } from "./modules/todoMethods";
import { validate, input } from "./modules/validateTask";
import { addButton } from "./modules/addTodos";
import { concludedCheckbox } from "./modules/addDoneTasks";

const todo = new Todo();
todo.configureDeleting();

addButton.addEventListener("click", function (event) {
  event.preventDefault();

  // to update the delete buttons event listeners when a task is added
  
  const isTodoValid = validate();
  
  if (isTodoValid) {
    input.classList.remove("empty-input");
    
    if (concludedCheckbox.checked) todo.createDoneTask();
    else todo.createTodo();
    
    todo.configureDeleting();
    input.value = "";
  } else {
    input.classList.add("empty-input");
  }
});
