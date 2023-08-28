const img = document.querySelector(".img");

img.addEventListener("dblclick", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  let left = e.target.offsetLeft;
  let top = e.target.offsetTop;

  let xInside = x - left;
  let yInside = y - top;

  const heart = document.createElement("i");
  heart.className = "bi bi-heart-fill";

  heart.style.left = `${xInside}px`;
  heart.style.top = `${yInside}px`;

  img.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
});
