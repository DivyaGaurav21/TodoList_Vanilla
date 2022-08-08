//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listners
todoButton.addEventListener("click" , addTodo);
todoList.addEventListener("click" , deleteCheck);

//functions


function addTodo(event){
    // Prevent a link from opening the URL:(prevent form from submitting)
    event.preventDefault();
    //TODO div
    //   if you entered empty input 
if(todoInput.value === ""){
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
    //check mark button
    const completedButton =document.createElement('button');
    completedButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //check trash button
    const trashButton =document.createElement('button');
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Appended final list
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

function deleteCheck(e){
  const item = e.target;
  //DELETE TODO
  if(item.classList[0] === 'trash-btn'){
    const todo = item.parentElement;
    //Animation
    todo.classList.add("fall");
    // todo.remove();
    todo.addEventListener('transitionend' , function(){
        todo.remove();
    })
  }
  //CHECK MARK
  if(item.classList[0] == "complte-btn");
  const todo = item.parentElement;
  todo.classList.toggle("completed");

}