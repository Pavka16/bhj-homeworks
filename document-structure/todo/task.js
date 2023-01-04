const taskInput = document.getElementById("task__input");
const taskAdd = document.getElementById("tasks__add");
const taskList = document.getElementById("tasks__list");

const closeTask = (e, task) => {
   e.preventDefault()
   task.remove();
}

taskAdd.addEventListener("click", function(e) {
   e.preventDefault();
   if (!taskInput.value)
      return;
   
   const task = document.createElement("div");
   task.className = "task";
   task.innerHTML = `
      <div class = "task__title">${taskInput.value}</div>
      <a href = "#" class = "task__remove">&times</a>`;
   
   task.querySelector(".task__remove").addEventListener("click", e => closeTask(e, task));
   taskList.appendChild(task);
})
