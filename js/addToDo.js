const $toDoForm = document.querySelector('.toDoForm');
const $inputToDo = $toDoForm.querySelector('.inputToDo');
const $toDoList = document.querySelector('.toDoList');

let toDos = [];

window.addEventListener('DOMContentLoaded', ()=> {
  loadToDo();
  $toDoForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if($inputToDo.value){
      addToDo($inputToDo.value);
    }
  })
})

function loadToDo() {
  if(localStorage.getItem('toDos')){
  const parsedToDos = JSON.parse(localStorage.getItem('toDos'));
  parsedToDos.forEach((e)=>{
    addToDo(e.text);
  })
  saveToDo();
  }
}

function addToDo(text) {
  const toDoObj = {
    text,
    id: toDos.length + 1,
  }
  const li = document.createElement('li');
  li.id = toDos.length + 1;
  const span = document.createElement('span');
  const deleteBtn = document.createElement('button');
  toDos.push(toDoObj);
  deleteBtn.addEventListener('click', deleteToDo);
  span.textContent = text;
  deleteBtn.textContent = '❌';
  li.appendChild(span);
  li.appendChild(deleteBtn);
  $toDoList.appendChild(li);
  $inputToDo.value = '';
  saveToDo();
}

function saveToDo() {
  localStorage.setItem('toDos', JSON.stringify(toDos));
}

function deleteToDo(e) {
  const targetLi = e.target.parentNode;
  const afterToDo = toDos.filter((element)=>{
    return targetLi.id != element.id
  })
  targetLi.remove();
  toDos = afterToDo;
  relocation();
  saveToDo();
}

function relocation() {
  const currentList = $toDoList.querySelectorAll('li');
  for(let i=0; i<currentList.length;i++){
    currentList[i].id = i+1;
    toDos[i].id = i+1;
  }
}