import { Todo } from "./modules/todoMethods";
import { validate, input } from "./modules/validateTask";
import { addButton } from "./modules/addTodos";
import { concludedCheckbox } from "./modules/addDoneTasks";

const todo = new Todo();

addButton.addEventListener("click", function (event) {
  event.preventDefault();

  const isTodoValid = validate();

  if (isTodoValid) {
    input.classList.remove("empty-input");

    if (concludedCheckbox.checked) todo.createDoneTask();
    else todo.createTodo();
  } else {
    input.classList.add("empty-input");
  }
});
