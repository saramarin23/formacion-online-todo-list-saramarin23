"use strict";

const addButton = document.querySelector("#add-btn");
const mainContainer = document.querySelector(".main-container");
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
  mainContainer.innerHTML += `<section class="add-task-section"><div class="add-task-popup">
    <span class="new-task">Nueva tarea</span>
    <input class="add-task-name" type="text" />
    <button class="add-task-btn">Añadir</button></div></section>`;
  const addTaskBtn = document.querySelector(".add-task-btn");

  const addTaskSection = document.querySelector(".add-task-section");
  addTaskSection.classList.add("hidden");
  addTaskBtn.addEventListener("click", addTask);
}

function addTask() {
  const addTaskSection = document.querySelector(".add-task-section");
  addTaskSection.classList.remove("hidden");
  const list = document.querySelector(".list-container");
  const taskName = document.querySelector(".add-task-name").value;
  console.log(taskName);
  list.innerHTML += `<li class="list-item"><input id="checkbox" type="checkbox" /><p id="task-text">${taskName}</p></li>`;
  //   addContainerTask();
}

// function hidePopUp() {
//   const addTaskSection = document.querySelector(".add-task-section");
//   addTaskSection.classList.remove("hidden");
//   console.log(event.target);
// }

window.addEventListener("load", addDate);
addButton.addEventListener("click", function() {
  addContainerTask();
  addTask();
});

// resetLogo.addEventListener("click", hidePopUp);
