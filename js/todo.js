const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach((element) => {
    toDos.push(element);
    paintToDo(element);
  });
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function removeTodo(li) {
  toDoList.removeChild(li);
  toDos = toDos.filter((todo) => todo.id !== li.id);
  saveToDos();
}

function paintToDo(newTodo) {
  console.log("i will paint", newTodo);
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.id = newTodo.id;
  span.innerText = newTodo.value;
  button.innerText = "X";
  button.addEventListener("click", () => removeTodo(li));
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const now = Date.now().toString();
  const newTodo = {
    id: now,
    value: toDoInput.value,
  };

  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleLoginSubmit);
