const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function delToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function makeList(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const p = document.createElement("p");
  p.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", delToDo);
  li.appendChild(p);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function toDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  makeList(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(makeList);
}
