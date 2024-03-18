"use strict";
const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

const listCategories = document.querySelector("#categories");
listCategories.classList.add("cont-task-one");

for (let category of numberOfCategories) {
  const categoryTitle = category.querySelector("h2");
  const elLiAll = category.querySelectorAll("li");
  const elUl = category.querySelector("ul");

  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${elLiAll.length}`);

  categoryTitle.classList.add("item-title-task-one");
  elUl.classList.add("item-menu-task-one");

  for (let li of elLiAll) {
    li.classList.add("item-menu-li-task-one");
  }
}
