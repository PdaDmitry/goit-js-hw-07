"use strict";

const registerForm = document.querySelector(".login-form");

const firstElemForm = document.querySelector("label");
firstElemForm.classList.add("form-label");

const firstInput = firstElemForm.querySelector("input");
firstInput.classList.add("form-label-input");

const secondElemForm = firstElemForm.nextElementSibling;
secondElemForm.classList.add("form-label", "form-label-second");

const secondInput = secondElemForm.querySelector("input");
secondInput.classList.add("form-label-input");

const btmForm = document.querySelector("button");
btmForm.classList.add("btm-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  console.log({ Email: `${email}`, Password: `${password}` });
  registerForm.reset();
}
