const boxes = document.querySelectorAll(".content");
const pilots = document.querySelectorAll(".pilot");
const container = document.querySelector(".pilot-container");

pilots.forEach((pilot) => {
  pilot.addEventListener("dragstart", () => {
    pilot.className += " hold";
    setTimeout(() => {
      pilot.className = "";
    }, 0);
  });

  pilot.addEventListener("dragend", () => {
    pilot.className = "pilot";
  });
});

boxes.forEach((box) => {
  box.addEventListener("dragenter", (e) => {
    e.preventDefault();
    box.classList.add("hovered");
  });

  box.addEventListener("dragleave", () => {
    box.classList.remove("hovered");
  });

  box.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  box.addEventListener("drop", () => {
    pilots.forEach((pilot) => {
      pilot.addEventListener("dragend", (e) => {
        box.append(e.target);
        box.classList.remove("hovered");
      });
    });
  });
});

container.addEventListener("dragenter", (e) => {
  e.preventDefault();
});

container.addEventListener("dragover", (e) => {
  e.preventDefault();
});

container.addEventListener("drop", () => {
  pilots.forEach((pilot) => {
    pilot.addEventListener("dragend", (e) => {
        container.append(e.target);
      container.classList.remove("hovered");
    });
  });
});
