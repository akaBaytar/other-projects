const body = document.body;
const slides = document.querySelectorAll(".slide");

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let active = 0;

function showSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
    slides[active].classList.add("active");
  });
}

function setBackgroundToBody() {
  body.style.backgroundImage = slides[active].style.backgroundImage;
}

setBackgroundToBody();

rightArrow.addEventListener("click", () => {
  active++;
  if (active > slides.length - 1) {
    active = 0;
  }
  showSlide();
  setBackgroundToBody();
});

leftArrow.addEventListener("click", () => {
  active--;
  if (active < 0) {
    active = slides.length - 1;
  }
  showSlide();
  setBackgroundToBody();
});
