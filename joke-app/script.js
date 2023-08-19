generate();

const jokes = document.querySelector(".jokes");
const button = document.querySelector("#jokeButton");

async function generate() {
  const config = {
    headers: {
      accept: "application/json",
    },
  };

  const randomJoke = await fetch("https://icanhazdadjoke.com/", config);
  const data = await randomJoke.json();

  jokes.innerHTML = data.joke;
}

button.addEventListener("click", generate);
