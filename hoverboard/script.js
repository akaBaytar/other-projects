const container = document.querySelector(".container");
const colors = [
  "#FFFFFF",
  "#C0C0C0",
  "#808080",
  "#FF0000",
  "#800000",
  "#FFFF00",
  "#808000",
  "#00FF00",
  "#008000",
  "#00FFFF",
  "#008080",
  "#0000FF",
  "#000080",
  "#FF00FF",
  "#800080",
];
const SQUARES = 899;

for (i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(dom) {
  const color = getRandomColor();
  dom.style.backgroundColor = color;
  dom.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(dom) {
  dom.style.background = "#1d1d1d";
  dom.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
