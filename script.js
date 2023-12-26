const inputBoxHobbies = document.getElementById("hobbies-input-box");
const inputBoxWellness = document.getElementById("wellness-input-box");
const inputBoxDate = document.getElementById("date-input-box");
const inputBoxFinancial = document.getElementById("financial-input-box");
const inputBoxTravel = document.getElementById("travel-input-box");
const inputBoxselfcare = document.getElementById("selfcare-input-box");

const wellnessList = document.getElementById("wellness-list");
const financialList = document.getElementById("financial-list");
const travelList = document.getElementById("travel-list");
const selfcareList = document.getElementById("selfcare-list");
const dateList = document.getElementById("date-list");
const hobbiesList = document.getElementById("hobbies-list");

function addTaskH() {
    if (inputBoxHobbies.value === "") {
        alert("Please enter a hobby");
    } else {
        const li = document.createElement("li");
        const span = document.createElement("span");
        li.innerHTML = inputBoxHobbies.value;
        span.innerHTML = "x";
        li.appendChild(span);
        hobbiesList.appendChild(li);
    }

    inputBoxHobbies.value = "";
    saveDataH();
}

function addTaskD() {
    if (inputBoxDate.value === "") {
        alert("Please enter your date goals");
    } else {
        const li = document.createElement("li");
        const span = document.createElement("span");
        li.innerHTML = inputBoxDate.value;
        span.innerHTML = "x";
        li.appendChild(span);
        dateList.appendChild(li);
    }

    inputBoxDate.value = "";
    saveDataD();
}

function addTaskW() {
    if (inputBoxWellness.value === "") {
        alert("Please enter your wellness activities");
    } else {
        const li = document.createElement("li");
        const span = document.createElement("span");
        li.innerHTML = inputBoxWellness.value;
        span.innerHTML = "x";
        li.appendChild(span);
        wellnessList.appendChild(li);
    }

    inputBoxWellness.value = "";
    saveDataW();
}

function addTaskF() {
    if (inputBoxFinancial.value === "") {
        alert("Please enter your financial goals");
    } else {
        const li = document.createElement("li");
        const span = document.createElement("span");
        li.innerHTML = inputBoxFinancial.value;
        span.innerHTML = "x";
        li.appendChild(span);
        financialList.appendChild(li);
    }

    inputBoxFinancial.value = "";
    saveDataF();
}

function addTaskT() {
    if (inputBoxTravel.value === "") {
        alert("Please enter your travel goals");
    } else {
        const li = document.createElement("li");
        const span = document.createElement("span");
        li.innerHTML = inputBoxTravel.value;
        span.innerHTML = "x";
        li.appendChild(span);
        travelList.appendChild(li);
    }

    inputBoxTravel.value = "";
    saveDataT();
}

function addTaskS() {
    if (inputBoxselfcare.value === "") {
        alert("Please enter your self-care goals");
    } else {
        const li = document.createElement("li");
        const span = document.createElement("span");
        li.innerHTML = inputBoxselfcare.value;
        span.innerHTML = "x";
        li.appendChild(span);
        selfcareList.appendChild(li);
    }

    inputBoxselfcare.value = "";
    saveDataS();
}

hobbiesList.addEventListener("click", function (e) {
    handleListClick(e, hobbiesList, saveDataH);
});

dateList.addEventListener("click", function (e) {
    handleListClick(e, dateList, saveDataD);
});

wellnessList.addEventListener("click", function (e) {
    handleListClick(e, wellnessList, saveDataW);
});

financialList.addEventListener("click", function (e) {
    handleListClick(e, financialList, saveDataF);
});

travelList.addEventListener("click", function (e) {
    handleListClick(e, travelList, saveDataT);
});

selfcareList.addEventListener("click", function (e) {
    handleListClick(e, selfcareList, saveDataS);
});

function handleListClick(e, list, saveDataFunction) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveDataFunction();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveDataFunction();
    }
}

inputBoxHobbies.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTaskH();
    }
});

inputBoxDate.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTaskD();
    }
});

inputBoxWellness.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTaskW();
    }
});

inputBoxFinancial.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTaskF();
    }
});

inputBoxTravel.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTaskT();
    }
});

inputBoxselfcare.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTaskS();
    }
});

function saveDataH() {
    localStorage.setItem("hobbiesdata", hobbiesList.innerHTML);
}

function saveDataD() {
    localStorage.setItem("datedata", dateList.innerHTML);
}

function saveDataW() {
    localStorage.setItem("wellnessdata", wellnessList.innerHTML);
}

function saveDataF() {
    localStorage.setItem("financialdata", financialList.innerHTML);
}

function saveDataT() {
    localStorage.setItem("traveldata", travelList.innerHTML);
}

function saveDataS() {
    localStorage.setItem("selfdata", selfcareList.innerHTML);
}

function loadDataH() {
    hobbiesList.innerHTML = localStorage.getItem("hobbiesdata");
}

function loadDataD() {
    dateList.innerHTML = localStorage.getItem("datedata");
}

function loadDataW() {
    wellnessList.innerHTML = localStorage.getItem("wellnessdata");
}

function loadDataF() {
    financialList.innerHTML = localStorage.getItem("financialdata");
}

function loadDataT() {
    travelList.innerHTML = localStorage.getItem("traveldata");
}

function loadDataS() {
    selfcareList.innerHTML = localStorage.getItem("selfdata");
}

loadDataH();
loadDataD();
loadDataW();
loadDataF();
loadDataT();
loadDataS();
