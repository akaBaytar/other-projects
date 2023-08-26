//dom variables
const textDOM = document.querySelector(".title");
const speedDOM = document.querySelector("#speed");

//variables
const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare maximus arcu et euismod...";

let speed = 100 / speedDOM.value;
let index = 1;

//function
function write() {
  textDOM.innerHTML = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 1;
  }
  setTimeout(write, speed);
}

//event listener
speedDOM.addEventListener("input", (e) => {
  speed = 100 / e.target.value;
});

write();
