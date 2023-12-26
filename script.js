const inputBox = document.getElementById("hobbies-input-box")
const listContainer = document.getElementById("hobbies-list")

function addTask(inputId) {
    const inputBox = document.getElementById(inputId);
    const listContainerId = `${inputId}-list`;
    const listContainer = document.getElementById(listContainerId);

    if (inputBox.value === '') {
        alert('Please enter a task');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    if (!listContainer) {
        console.error(`List container with ID '${listContainerId}' not found.`);
        return;
    }

    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }

},false);


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function loadData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

loadData();