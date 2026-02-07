document.getElementById ("todo-form").addEventListener("submit",addTask);
document.getElementById ("filter-tasks").addEventListener("click",filterTasks);
document.getElementById ("clear-tasks").addEventListener("click",clearTasks);

function addTask(event){
    event.preventDefault();
    const taskInput = document.getElementById("task");
    const dateInput = document.getElementById("date");

    const task = taskInput.value;
    const date = dateInput.value;

    if (task === "" || date === "") {
        alert ("Please fill in both fields.");

    }else{
        const tableBody = document
        .getElementById("todo-list")
        .getElementsByTagName("tbody")[0];
    
        const noTasksRow = document.getElementById("no-tasks");
        if (noTasksRow) {
            noTasksRow.remove();
        }

        const newRow = tableBody.insertRow();
    
        const taskCell = newRow.insertCell(0);
        const dateCell = newRow.insertCell(1);
        taskCell.textContent = task;
        dateCell.textContent = date;
    }
}

function filterTasks(){
    const filterDate = document.getElementById("filter-date").value;
    const row = document.querySelectorAll("#todo-list tbody tr");

    for (let i = 0; i < row.length; i++){
        if (row[i].id === "no-tasks") {
            continue;
        }
        const dateCell = row[i].getElementsByTagName("td")[1];
        if (filterDate === "" || dateCell.textContent === filterDate){
            row[i].style.display = "";
        } else {
            row[i].style.display = "none";
        }   
    }
}

function clearTasks(){
    const tableBody = document
    .getElementById("todo-list")
    .getElementsByTagName("tbody")[0];

    tableBody.innerHTML = "";
    
    const noTasksRow = tableBody.insertRow();
    noTasksRow.id = "no-tasks";
    const noTasksCell = noTasksRow.insertCell(0);
    noTasksCell.colSpan = 2;
    noTasksCell.textContent = "No tasks available.";
}
