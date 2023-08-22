const button = document.querySelector("#button");
const container = document.querySelector(".container");

const messages = [
  "notification message 1",
  "notification message 2",
  "notification message 3",
  "notification message 4",
  "notification message 5",
];

const colors = ["darkslateblue", "darkgreen", "darkred"];

button.addEventListener("click", notification);

function notification() {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.style.background = colors[Math.floor(Math.random() * colors.length)];

  const text = document.createElement("p");
  text.className = "text";
  text.innerText = messages[Math.floor(Math.random() * messages.length)];

  const closeButton = document.createElement("i");
  closeButton.className = "bi bi-x-circle";

  notification.appendChild(text);
  notification.appendChild(closeButton);

  container.appendChild(notification);

  closeButton.addEventListener("click", () => notification.remove());

  setTimeout(() => notification.remove(), 5000);
}
