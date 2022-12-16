// bby dom API we get element and store in variable 
//selectors for todoInput , todobutton , todoList , and filter
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


//Event Listners function will be call when certain event occurs 
document.addEventListener('DOMContentLoaded', getTodos);
// after clicking addtodo btn 
todoButton.addEventListener("click", addTodo);
// after clicking delete check button 
todoList.addEventListener("click", deleteCheck);
// filter todos in completed uncompleated and all on certain click event 
filterOption.addEventListener("click", filterTodo);

//functions for add newly created single todo
function addTodo(event) {
  // Prevent a link from opening the URL:(prevent form from submitting)
  event.preventDefault();
  //TODO div(contains todo-item , compleated  and delete button)
  // if you entered empty input 
  if (todoInput.value === "") {
    alert("please add todos");
    return;
  }
  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");
  //create LI
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //SAVE NEW TODO TO LOCAL STORAGE
  saveLocalTodos(todoInput.value);
  //check mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //check trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //Appended final list
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
     // //DELETE TODO
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
     //add class for Animation faldown purpose
    todo.classList.add("fall");
    //for removing single todo in localStorage
    removeLocalTodos(todo);
     // for removing single todo
    todo.addEventListener('transitionend', function () {
      todo.remove();
    })
  }
     // //CHECK MARK
  if (item.classList[0] == "complte-btn");
  const todo = item.parentElement;
  todo.classList.toggle("completed");

}

//for filtering list
// this filterTOdo funcction will call when you click on filter 
function filterTodo(e) {
  const todos = todoList.childNodes;
  // console.log(e.target.value);
  todos.forEach(function (todo) {
      switch (e.target.value) {
        // when you choose all option 
      case "all":
        todo.style.display = "flex";
              break;
        //   when you choose compleate option 
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
        // when you click uncompleate
      case "uncompleted":   
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  })
}

// function for saving single todo in todos array 
const saveLocalTodos=(todo) => {
  let todos;
  //Check --> Hey DO I already have things in local Storage
    if (localStorage.getItem('todos') === null) {
    //   let take empty array 
    todos = [];
    } else {
        // fetch todos of local storage 
    todos = JSON.parse(localStorage.getItem('todos'));
    }
    // push single todo in todos array 
    todos.push(todo);
    // finally put that todos array in browser local storage 
  localStorage.setItem('todos' , JSON.stringify(todos));
}

//function to get todo in localStorage and rendering on UI
// this getTodos function will be call when the window browser is loaded 
function getTodos(){
//   console.log('divya')
  let todos;
  //Check --> Hey DO I already have things in local Storage
    if (localStorage.getItem('todos') === null) {
    //   if local storage is empty initialize empty array
    todos = [];
    } else {
        // get todos and for array 
    todos = JSON.parse(localStorage.getItem('todos'));
    }
    // for each item in array fom element and append 
  todos.forEach((todo) => {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");
  //create LI
  const newTodo = document.createElement('li');
  newTodo.innerText = todo;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //check mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //check trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //Appended final list
  todoList.appendChild(todoDiv);
  })
}

//function for deleting each todos item (todo) in local storage 
function removeLocalTodos(todo){
//   console.log('divya')
  let todos;
  //Check --> Hey DO I already have things in local Storage
  if(localStorage.getItem('todos') === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
    }
    // try to find target todo content 
    const targetTodo = todo.children[0].innerText;
    // and find the index of that content and delete that element in array by splice method of array 
    todos.splice(todos.indexOf(targetTodo), 1);
    // and set again this todos array in local storage 
  localStorage.setItem('todos' , JSON.stringify(todos))
}

