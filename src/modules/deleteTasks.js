const deleteTask = () => {
  const tasks = document.querySelectorAll(".task");
  for (let i = 0; i < tasks.length; i++) {
    tasks[i]
      .querySelector(".delete-btn")
      .addEventListener("click", function () {
        this.parentNode.remove();
      });
  }
};

export { deleteTask };
