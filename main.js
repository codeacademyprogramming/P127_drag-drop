const draggedElement = document.querySelector("img");
const dragItems = document.querySelectorAll(".drag-item");

draggedElement.addEventListener("dragstart", (e) => {
  e.target.classList.add("dragged-item");
});

draggedElement.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragged-item");

  e.target.parentElement.classList.remove("hovered-drag-item");
});

dragItems.forEach((dragItem) => {
  dragItem.addEventListener("dragenter", (e) => {
    e.preventDefault();
    e.target.classList.add("hovered-drag-item");
    dragItem.appendChild(draggedElement);
  });

  dragItem.addEventListener("dragend", (e) => {
    e.target.classList.remove("hovered-drag-item");
  });

  dragItem.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  dragItem.addEventListener("dragleave", (e) => {
    e.preventDefault();
    e.target.classList.remove("hovered-drag-item");
  });
});

//Jahangir
