const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    const height = (window.innerHeight / 5) * 4;
    const top = card.getBoundingClientRect().top;
    if (top < height) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
});
