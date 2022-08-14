const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const class_hidden = "hidden";
const user_name = "username";

function getGreetings(name) {
  greeting.innerText = `Hello ${name}`;
  greeting.classList.remove(class_hidden);
}

function loginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(user_name, username);
  loginForm.classList.toggle(class_hidden);
  getGreetings(username);
}

const savedUsername = localStorage.getItem(user_name);

if (savedUsername == null) {
  loginForm.classList.remove(class_hidden);
} else {
  getGreetings(savedUsername);
}

loginForm.addEventListener("submit", loginSubmit);
