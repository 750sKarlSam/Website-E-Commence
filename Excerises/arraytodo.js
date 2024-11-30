//Display lis
function arrayToDo() {
    let input = document.getElementById('taskInput').value;    
    let list = document.getElementById('Arratasklist');  //Retrieves the list of tasks
    list.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let task = document.createElement('li');
        task.innerHTML = tasks[i];
        list.appendChild(task);
      }
  
}

//add task to list
function addarraylist() {
    let input = document.getElementById('taskInput').value;    
    tasks.push(input);
    arrayToDo();
}

    var tasks = ['Task 1', 'Task 2', 'Task 3'];

    //When it loads it calls this function to display the list
    window.onload = function() {
        arrayToDo();
    }

    




    // Function to display the list of tasks on the webpage
function arrayToDo() {
    // Get the value from the input field where users enter a new task
    let input = document.getElementById('taskInput').value;    

    // Retrieve the unordered list (UL) element by its ID 'Arratasklist'
    let list = document.getElementById('Arratasklist');  
    
    // Clear the current contents of the list to avoid duplication when adding new items
    list.innerHTML = ""; 

    // Iterate over each task in the 'tasks' array and display it as a list item (LI) in the UL
    for (let i = 0; i < tasks.length; i++) {
        // Create a new list item element for each task
        let task = document.createElement('li');

        // Set the inner HTML of the list item to the current task
        task.innerHTML = tasks[i];

        // Append the created list item to the UL element, displaying it on the webpage
        list.appendChild(task);
    }
}

// Function to add a new task to the list and display it
function addarraylist() {
    // Retrieve the value of the input field (new task) when the user clicks the 'Add New Task' button
    let input = document.getElementById('taskInput').value;    

    // Add the input value as a new task to the 'tasks' array
    tasks.push(input);

    // Call 'arrayToDo()' to update the displayed list with the new task
    arrayToDo();
}

// Create an initial array of tasks with some pre-defined values
var tasks = ['Task 1', 'Task 2', 'Task 3'];

// When the webpage loads, this function is triggered to display the initial list of tasks
window.onload = function() {
    arrayToDo(); // Calls the display function to show the initial tasks
}

