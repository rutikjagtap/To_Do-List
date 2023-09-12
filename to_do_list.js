document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-btn">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = "";

            const deleteBtn = listItem.querySelector(".delete-btn");
            deleteBtn.addEventListener("click", function () {
                listItem.remove();
            });
        }
    });

    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addTaskBtn.click();
        }
    });
});
