const progressBar = document.querySelector(".progress-bar");
const circles = document.querySelectorAll(".circle");

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentActive = 1;

prevButton.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

nextButton.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  const width = ((actives.length - 1) / (circles.length - 1)) * 100;
  progressBar.style.width = width + "%";

  if (currentActive === 1) {
    prevButton.disabled = true;
  } else if (currentActive === circles.length) {
    nextButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
}
