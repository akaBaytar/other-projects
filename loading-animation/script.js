const background = document.querySelector(".background");
const count = document.querySelector(".count");

let timer = 0;
let interval = setInterval(blur, 50);

function blur() {
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  timer++;
  if (timer > 99) {
    clearInterval(interval);
  }

  count.innerHTML = `${timer}%`;
  count.style.opacity = scale(timer, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(timer, 0, 100, 30, 0)}px)`;
}
