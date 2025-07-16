const inputBox = document.getElementById("input-box");
inputBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Tidak Boleh Kosong Ya!");
    } else {
        let li = document.createElement("li");

        let now = new Date();
        let timestamp = now.toLocaleString(); 

        li.innerHTML = `<strong>${inputBox.value}</strong><br><small>Dibuat pada: ${timestamp}</small>`;
        
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();