//Getting all required elements
const inputField = document.querySelector('.inputField'),
      list = document.querySelector('.list'),
      pendingNum = document.querySelector('.remaining'),
      clearBtn = document.querySelector('.btn');
// we call this function while adding deleting and checking unchecking the task
allTasks();
function allTasks(){
    let tasks = document.querySelectorAll('.task');
    //if task's length is 0 then pendingNum text content wil be no if not then pending value will be tasks present
    pendingNum.textContent = tasks.length  === 0 ? "no" : tasks.length;
}
//add task while we put value in text area and press enter
inputField.addEventListener("keyup" , e=>{
    let inputValue = inputField.value.trim();
    if(e.key === "Enter" && inputValue.length > 0){

    let listItem = ` <li class="list-item task" onclick="handleCheck(this)">
                    <input type="checkbox" class="checkbox">
                    <label  class="label">${inputValue}</label>
                    <i class="fa-solid fa-trash icon" onclick="delTask(this)"></i>
                    </li>`;
        list.insertAdjacentHTML('beforeend', listItem);
        inputField.value = ""; //removing value from input value
    }
    allTasks();
})
//checking and unchecking the checkbox while clicking on the listitem
function handleCheck(e){
    const checkbox = e.querySelector('input'); //getting checkbox
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle('task');
    allTasks();
}
//removing all tasks on clicking on clear all btn
clearBtn.onclick = ()=>{
    let tasks = document.querySelectorAll('.list-item');
   list.innerHTML = "";
   allTasks();
   inputField.value = "";
}
// removing parent element list-item  on clicking on delete icons
function delTask(e){
    e.parentElement.remove();
}