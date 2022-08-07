//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list-container');
console.log(todoInput)

//Event Listners
todoButton.addEventListener("click" , addTodo);

//functions
function addTodo(event){
    // Prevent a link from opening the URL:(prevent form from submitting)
    event.preventDefault();
    //TODO div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = 'divya gaurav';
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //check mark button
    const completedButton =document.createElement('button');
    completedButton.innerHTML = '<iclass = "fas fa-check"></i>';
    completedButton.classList.add("compleate-btn");
    todoDiv.appendChild(completedButton);
    //check trash button
    const trashButton =document.createElement('button');
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashButton.classList.add("compleate-btn");
    todoDiv.appendChild(trashButton);
    //Appended final list
    todoList.appendChild(todoDiv);
}