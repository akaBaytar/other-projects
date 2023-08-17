const cards = document.querySelectorAll(".card");

function deleteClasses() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    deleteClasses();
    card.classList.add("active");
  });
});
