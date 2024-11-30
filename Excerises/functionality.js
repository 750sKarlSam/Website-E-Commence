function addTasks() {

    const element = document.getElementById('newTask').value;
    let input = document.createElement('li');
    let tasklist = document.getElementById('tasklist');
    input.innerHTML = element;
    tasklist.appendChild(input);

    taskField.value = "";


};

for (let index = 0; index < tasks.length; index++) {
    const element = tasks[index];

    addItem(element);
}