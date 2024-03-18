"use strict";
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

function elLiImages() {
  const item = images
    .map((el) => {
      return `<li class="gallery-item-task-two"><img class="gallery-img-task-two" src="${el.url}" alt="${el.alt}" /></li>`;
    })
    .join("\n\n");

  return item;
}

const htmllist = elLiImages();
gallery.innerHTML = htmllist;
