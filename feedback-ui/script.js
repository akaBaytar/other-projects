//dom variables
const container = document.querySelector(".container");
const ratingContainer = document.querySelector(".ratings");
const ratings = document.querySelectorAll(".rating");
const button = document.querySelector("button");

//variables
let selectedRating = "Satisfied";

//event listener
ratingContainer.addEventListener("click", (e) => {
  ratings.forEach((rating) => {
    if (rating.classList.contains("active")) {
      rating.classList.remove("active");
    }
  });
  if (e.target.parentNode.classList.contains("rating")) {
    e.target.parentNode.classList.add("active");
  }
  selectedRating = e.target.nextElementSibling.innerText;
});

button.addEventListener("click", () => {
  container.innerHTML = `
    <i class="bi bi-heart-fill"></i>
    <br />
    <p style="text-align: center; font-size: 1.5rem; font-weight: 500;">
        Thank you for your feedback!
    </p>
    <br />
    <small>Feedback: ${selectedRating}</small>
    `;
});
