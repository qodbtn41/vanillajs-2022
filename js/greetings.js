const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const NAME_KEY = "name";

const storageName = localStorage.getItem(NAME_KEY);
if (storageName) {
  login(storageName);
}

function login(name) {
  loginForm.classList.add("hidden");
  greeting.classList.remove("hidden");
  greeting.innerText = `Hello ${name}`;
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const name = loginInput.value;
  localStorage.setItem(NAME_KEY, name);
  login(name);
}

loginForm.addEventListener("submit", handleLoginSubmit);
