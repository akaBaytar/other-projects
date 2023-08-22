//dom variables
const canvas = document.querySelector("#canvas");
const decButton = document.querySelector("#decrease");
const incButton = document.querySelector("#increase");
const fontSize = document.querySelector("#font");
const colorInput = document.querySelector("#color");
const clearButton = document.querySelector("#clear");

//variables
const context = canvas.getContext("2d");
let x;
let y;
let size = 5;
let color = "black";
let isPressed = false;

//functions
function drawCircle(x, y) {
  context.beginPath();
  context.arc(x, y, size, 0, Math.PI * 2);
  context.fillStyle = color;
  context.fill();
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.strokeStyle = color;
  context.lineWidth = size * 2;
  context.stroke();
}

function updateSize() {
  fontSize.innerText = size;
}

//event listeners
canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

//dom manipulation
colorInput.addEventListener("change", (e) => {
  color = e.target.value;
});

incButton.addEventListener("click", () => {
  size += 1;
  if (size > 25) {
    size = 25;
  }
  updateSize();
});

decButton.addEventListener("click", () => {
  size -= 1;
  if (size < 1) {
    size = 1;
  }
  updateSize();
});

clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.clientHeight);
});
