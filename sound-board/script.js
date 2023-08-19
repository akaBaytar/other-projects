const sounds = [
  "bruh",
  "dont-touch",
  "gandalf",
  "motivation",
  "m&b",
  "turkiyeli",
];

sounds.forEach((sound) => {
  const buttonContainer = document.querySelector("#buttons");
  const button = document.createElement("button");

  button.addEventListener("click" , ()=>{
    stop();
    document.getElementById(sound).play();
  })

  button.classList.add("buttons");
  button.innerText = sound;
  buttonContainer.appendChild(button);

  function stop() {
    sounds.forEach((sound) => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    })
  }
});
