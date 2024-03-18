"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector("input");
inputNum.classList.add("input-task-six");

const btnCreate = document.querySelector("[data-create]");
btnCreate.addEventListener("click", createBoxes);

function createBoxes() {
  const existingDivElem = document.querySelector(".new-div-el-task-six");
  if (existingDivElem) {
    existingDivElem.remove();
  }

  const divElem = document.createElement("div");
  divElem.classList.add("new-div-el-task-six");

  let arr = [];

  const inputValue = parseInt(inputNum.value);
  let w = 30;
  let h = 30;
  if (inputValue >= 1 && inputValue <= 100) {
    for (let i = 0; i < inputValue; i++) {
      const myDivElem = document.createElement("div");
      myDivElem.style.backgroundColor = getRandomHexColor();
      myDivElem.style.width = w + "px";
      myDivElem.style.height = h + "px";
      arr.push(myDivElem);
      w += 10;
      h += 10;
    }
  }
  divElem.append(...arr);

  const divBoxes = document.getElementById("boxes");
  divBoxes.append(divElem);
  inputNum.value = "";
}

const removeDestroyBtn = document.querySelector("[data-destroy]");
removeDestroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  const removeDivElem = document.querySelector(".new-div-el-task-six");
  removeDivElem.remove();
}
