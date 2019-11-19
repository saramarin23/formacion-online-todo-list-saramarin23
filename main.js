"use strict";

const addButton = document.querySelector("#add-btn");

function addDate() {
  const numberDate = document.querySelector(".day-container");
  const stringDate = document.querySelector(".string-container");
  console.log(stringDate);

  let dayToday = new Date().toLocaleDateString("es-ES", { day: "numeric" });
  let weekToday = new Date().toLocaleDateString("es-ES", { weekday: "long" });
  let monthYearToday = new Date().toLocaleDateString("es-ES", {
    month: "long",
    year: "numeric"
  });
  stringDate.innerHTML = weekToday;
}

function addTask(e) {
  e.preventDefault();
  const list = document.querySelector(".list-container");
  console.log(list);
  list.innerHTML += `<li class="list-item"><input id="checkbox" type="checkbox" /><p id="task-text"></p></li>`;
  console.log("Has clickao");
}

window.addEventListener("load", addDate);
addButton.addEventListener("click", addTask);
