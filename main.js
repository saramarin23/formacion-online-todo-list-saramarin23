"use strict";

const addButton = document.querySelector("#add-btn");
const mainContainer = document.querySelector(".main-container");
const addTaskSection = document.querySelector(".add-task-section");
const resetLogo = document.querySelector("#logo");

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
  //   stringDate.innerHTML = weekToday;
}

function addContainerTask() {
  const addTaskBtn = document.querySelector(".add-task-btn");
  addTaskSection.classList.toggle("hidden");
  addTaskBtn.addEventListener("click", addTask);

  document.querySelector(".add-task-name").value = "";
}

function addTask() {
  addTaskSection.classList.toggle("hidden");
  const list = document.querySelector(".list-container");
  const taskName = document.querySelector(".add-task-name").value;
  list.innerHTML += `<li class="list-item"><input id="checkbox" type="checkbox" /><p id="task-text">${taskName}</p></li>`;
}

// function hidePopUp() {
//   const addTaskSection = document.querySelector(".add-task-section");
//   addTaskSection.classList.remove("hidden");
//   console.log(event.target);
// }

window.addEventListener("load", addDate);
addButton.addEventListener("click", addContainerTask);

// resetLogo.addEventListener("click", hidePopUp);
