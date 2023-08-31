//dom variables
const searchDOM = document.querySelector("#search");
const resultDOM = document.querySelector(".result");

//variables
const user_count = 100;
const URL = `https://randomuser.me/api?results=${user_count}`;

//fetch user
async function getData() {
  const response = await fetch(URL);
  const { results } = await response.json();

  results.forEach((user) => {
    const userDOM = document.createElement("li");
    userDOM.className = "user";
    userDOM.innerHTML = `
    <img
        src="${user.picture.large}"
        alt="${user.name.first + " " + user.name.last}"
    />
    <div class="user-info">
        <strong class="name">
            ${user.name.first + " " + user.name.last}
        </strong>
        <small class="location" style="display: block;">
            ${user.location.city}, 
            <span class="country">
                ${user.location.country}
            </span>
        </small>
    </div>
    `;
    resultDOM.appendChild(userDOM);
    console.log(user);
  });
}
getData();

//event listener
searchDOM.addEventListener("input", (e) => {
    const users = document.querySelectorAll(".user");
    users.forEach((user) => {
        if (user.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
            user.style.display = "flex"
        } else {
            user.style.display = "none"
        }
    })
});

