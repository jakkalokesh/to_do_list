document.addEventListener("DOMContentLoaded", function() {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");
  
  addTaskBtn.addEventListener("click", function() {
    addTask();
  });

  taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      addTask();
    }
  });

  taskList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
      toggleTaskCompletion(e.target);
    }
  });

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;
      taskList.appendChild(li);
      taskInput.value = "";
    }
  }

  function toggleTaskCompletion(task) {
    task.classList.toggle("completed");
  }
});
