let addTask = document.getElementById('addTask');
let inputTask = document.getElementById('inputTask');
let taskList = document.getElementById('taskList');

let key = 'myTask';

let tasks = [];
if(localStorage.getItem(key) !== null){
    tasks = JSON.parse(localStorage.getItem(key));
    renderTask();
}

addTask.onclick = function () {
    writeToLocalStorage();
    renderTask();
    inputTask.value = '';
};

function writeToLocalStorage(){
    let temp = {};
    temp.task = inputTask.value;
    temp.check = false;
    let i = tasks.length;
    tasks[i] = temp;
    localStorage.setItem(key, JSON.stringify(tasks));
}

function renderTask(){

    let out = '';
    for(let key in tasks){
        if(tasks[key].check !== true){
            out += `<li class="list-group-item list-group-item-action outTask">${tasks[key].task}</li>`;
        }
    }
    taskList.innerHTML = out;
}