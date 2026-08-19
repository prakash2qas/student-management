const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", function () {

    const task = taskInput.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.textContent = task;
    li.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
    });

    taskList.appendChild(li);

    taskInput.value = "";
});




