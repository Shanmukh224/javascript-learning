const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const error = document.getElementById("error");
const todoList = document.getElementById("todoList");


form.addEventListener("submit", (event) => {

    event.preventDefault();

    const task = input.value.trim();

    // Validation
    if (task === "") {
        error.textContent = "Please enter a task";
        error.style.color = "red";
        return;
    }
    
    error.textContent = "";

    // Create list item
    const listItem = document.createElement("li");

    listItem.textContent = task;


    // Create Delete button
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.classList.add("delete-btn");


    // Create Complete button
    const completeButton = document.createElement("button");

    completeButton.textContent = "Complete";

    completeButton.classList.add("complete-btn");


    // Add buttons to list item
    listItem.append(deleteButton, completeButton);

    // Add list item to todo list
    todoList.append(listItem);


    // Clear input
    input.value = "";

});


/*
   Event Delegation
*/

todoList.addEventListener("click", (event) => {

    // Delete Todo
    if (event.target.classList.contains("delete-btn")) {

        event.target.parentElement.remove();

    }


    // Complete Todo
    if (event.target.classList.contains("complete-btn")) {

        event.target.parentElement.classList.toggle("completed");

    }

});