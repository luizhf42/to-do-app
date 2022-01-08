const input = document.querySelector(".add-todo-input");

const validate = () => {
  const todoText = input.value;

  return todoText.length ? true : false;
};

export { validate, input };
