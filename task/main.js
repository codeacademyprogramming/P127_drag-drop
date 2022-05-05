const input = document.querySelector("input");

function handler() {
  const draggableElements = document.querySelectorAll(".task");
  const containers = document.querySelectorAll(".task-container");

  draggableElements.forEach((element) => {
    element.addEventListener("dragstart", (e) => {
      setTimeout(() => {
        e.target.classList.add("drag-item");
      }, 0);
    });

    element.addEventListener("dragend", (e) => {
      e.target.classList.remove("drag-item");
    });
  });

  containers.forEach((container) => {
    container.addEventListener("dragenter", (e) => {
      const dragItem = document.querySelector(".drag-item");

      console.log(dragItem);

      container.appendChild(dragItem);

      switch (e.target.id) {
        case "todo":
          dragItem.classList.remove("task-doing");
          dragItem.classList.remove("task-done");
          dragItem.classList.add("task-todo");
          
          break;
        case "doing":
          dragItem.classList.remove("task-todo");
          dragItem.classList.remove("task-done");
          dragItem.classList.add("task-doing");

          break;
        case "done":
          dragItem.classList.remove("task-doing");
          dragItem.classList.remove("task-todo");
          dragItem.classList.add("task-done");

          break;
        default:
      }
    });

    container.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
  });
}

handler();

input.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    const container = document.querySelector("#todo");
    const value = e.target.value;

    const task = document.createElement("div");
    const node = document.createTextNode(value);

    task.classList.add("task-todo");
    task.classList.add("task");
    task.setAttribute("draggable", true);

    task.appendChild(node);

    container.appendChild(task);

    e.target.value = "";
    handler();
  }
});
