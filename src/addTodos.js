const addButton = document.querySelector(".add-todo-btn");
const input = document.querySelector(".add-todo-input");
const todoList = document.querySelector(".todo-list");
const todoStructure =
"<li class='todo-task task'><span role='button' class='done-btn task-btn'><img src='public/assets/images/checked.svg' alt class='done-icon task-icon'/></span><span contenteditable class='task-text input'>something</span><span role='button' class='delete-btn task-btn'><img src='public/assets/images/trash-can.svg' alt class='delete-icon task-icon'/></span></li>";

const addTodos = () => {
  todoList.innerHTML += todoStructure;
  
  const newTodo = todoList.lastChild;
  const todoText = input.value;
  newTodo.children[1].innerText = todoText;
};

export { addTodos, addButton };
