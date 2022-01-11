const addButton = document.querySelector(".add-todo-btn");
const todoList = document.querySelector(".todo-list");
const todoStructure =
  "<li class='todo-task task'><span role='button' class='done-btn task-btn'><img src='public/assets/images/checked.svg' alt class='done-icon task-icon'/></span><span contenteditable class='task-text input'>something</span><span role='button' class='delete-btn task-btn'><img src='public/assets/images/trash-can.svg' alt class='delete-icon task-icon'/></span></li>";

const addTodos = (text) => {
  todoList.innerHTML += todoStructure;

  const newTodo = todoList.lastChild;
  const todoText = text;
  newTodo.children[1].innerText = todoText;
};

export { addTodos, addButton };
