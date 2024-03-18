"use strict";
const myDivElem = document.createElement("div");
myDivElem.classList.add("div-cont-task-three");

const input = document.querySelector("#name-input");
const titleOne = document.querySelector("h1");
titleOne.classList.add("title-one-task-three");

myDivElem.append(input, titleOne);

const body = document.querySelector("body");
body.insertAdjacentElement("afterbegin", myDivElem);

const textSpan = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange() {
  if (input.value.trim().length) {
    textSpan.textContent = input.value.trim();
  } else {
    textSpan.textContent = "Anonymous";
  }
}
