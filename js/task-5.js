"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divElem = document.querySelector(".widget");

const onBtnChangeColor = document.querySelector(".change-color");
onBtnChangeColor.addEventListener("click", changeColor);

function changeColor() {
  const color = getRandomHexColor();
  const bodyColor = document.querySelector("body");
  bodyColor.style.backgroundColor = color;

  const textSpan = document.querySelector(".color");
  textSpan.style.color = color;
  textSpan.textContent = color;
}
