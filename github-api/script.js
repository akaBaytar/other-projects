//variables
const API_URL = "https://api.github.com/users/";

//dom variables
const form = document.querySelector("#form");
const search = document.querySelector("#search");
const container = document.querySelector(".container");

//functions
async function getUser(username) {
  try {
    const { data } = await axios.get(API_URL + username);
    setUser(data);
    getRepos(username);
  } catch (err) {
    setErr();
  }
}

async function getRepos(username) {
  const { data } = await axios.get(API_URL + username + "/repos?sort=created");
  setRepos(data);
}

function setRepos(repos) {
  const repoContainer = document.querySelector(".repos");

  repos.slice(0, 9).forEach((repo) => {
    const repoDOM = document.createElement("a");
    repoDOM.className = "repo";
    repoDOM.href = repo.html_url;
    repoDOM.target = "_blank";
    repoDOM.innerText = repo.name;
    repoContainer.appendChild(repoDOM);
  });
}

function setUser(user) {
  const card = `
    <div class="card">
        <div class="avatar">
          <img
            src="${user.avatar_url}"
            alt="${user.name}"
            title="${user.name}"
          />
        </div>
        <div class="info">
          <h2 class="username">${user.login}</h2>
          <p class="bio">${user.bio}</p>
          <ul class="meta-list">
            <li class="list-item">${user.followers}<strong>Followers</strong></li>
            <li class="list-item">${user.following}<strong>Following</strong></li>
            <li class="list-item">${user.public_repos}<strong>Repo</strong></li>
          </ul>
          <div class="repos"></div>
        </div>
    </div>
    `;
  container.innerHTML = card;
}

function setErr() {
  const card = `
    <div class="card">
        <h2>We looked everywhere, but no profile found with this username.</h2>
    </div>
    `;
  container.innerHTML = card;
}
//event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});
