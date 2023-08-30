//dom variables
const showButton1 = document.querySelector("#show1");
const showButton2 = document.querySelector("#show2");
const password1DOM = document.querySelector("#password1");
const password2DOM = document.querySelector("#password2");
const updateButton = document.querySelector(".update");
const descContainer = document.querySelector(".desc-container");

const characterLength = document.querySelector(".list-item1");
const lowercaseChar = document.querySelector(".list-item2");
const uppercaseChar = document.querySelector(".list-item3");
const numberCount = document.querySelector(".list-item4");
const specialChar = document.querySelector(".list-item5");

//variables
const uppers = /[A-Z]/g;
const lowers = /[a-z]/g;
const numbers = /[0-9]/g;
const symbols = /[()_/.,?!@#$%&*-]/g;

// event listeners
showButton1.addEventListener("click", (e) => {
  e.preventDefault();
  showButton1.children[0].classList.toggle("bi-eye");
  showButton1.children[0].classList.toggle("bi-eye-slash");
  if (password1DOM.type === "password") {
    password1DOM.type = "text";
  } else {
    password1DOM.type = "password";
  }
});

showButton2.addEventListener("click", (e) => {
  e.preventDefault();
  showButton2.children[0].classList.toggle("bi-eye");
  showButton2.children[0].classList.toggle("bi-eye-slash");
  if (password2DOM.type === "password") {
    password2DOM.type = "text";
  } else {
    password2DOM.type = "password";
  }
});

password1DOM.addEventListener("input", (e) => {
  let password = e.target.value;
  if (password.length > 11) {
    characterLength.children[0].style.color = "green";
    characterLength.style.textDecoration = "line-through";
  } else {
    characterLength.children[0].style.color = "#555";
    characterLength.style.textDecoration = "none";
  }

  if (password.match(lowers)) {
    lowercaseChar.children[0].style.color = "green";
    lowercaseChar.style.textDecoration = "line-through";
  } else {
    lowercaseChar.children[0].style.color = "#555";
    lowercaseChar.style.textDecoration = "none";
  }

  if (password.match(uppers)) {
    uppercaseChar.children[0].style.color = "green";
    uppercaseChar.style.textDecoration = "line-through";
  } else {
    uppercaseChar.children[0].style.color = "#555";
    uppercaseChar.style.textDecoration = "none";
  }

  if (password.match(numbers)) {
    numberCount.children[0].style.color = "green";
    numberCount.style.textDecoration = "line-through";
  } else {
    numberCount.children[0].style.color = "#555";
    numberCount.style.textDecoration = "none";
  }

  if (password.match(symbols)) {
    specialChar.children[0].style.color = "green";
    specialChar.style.textDecoration = "line-through";
  } else {
    specialChar.children[0].style.color = "#555";
    specialChar.style.textDecoration = "none";
  }
});

updateButton.addEventListener("click", (e) => {
  e.preventDefault();
  let password1 = password1DOM.value;
  let password2 = password2DOM.value;

  if (password1.length < 12) {
    const alert = document.createElement("div");
    alert.classList.add("alert");
    alert.innerHTML = `
        <i class="bi bi-exclamation-circle"></i>
        <span>Your password must be at least 12 characters.</span>
        `;
    descContainer.appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 5000);
  }

  if (!password1.match(lowers)) {
    const alert = document.createElement("div");
    alert.classList.add("alert");
    alert.innerHTML = `
        <i class="bi bi-exclamation-circle"></i>
        <span>Your password must be at least 1 lowercase.</span>
        `;
    descContainer.appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 5000);
  }

  if (!password1.match(uppers)) {
    const alert = document.createElement("div");
    alert.classList.add("alert");
    alert.innerHTML = `
        <i class="bi bi-exclamation-circle"></i>
        <span>Your password must be at least 1 uppercase.</span>
        `;
    descContainer.appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 5000);
  }

  if (!password1.match(numbers)) {
    const alert = document.createElement("div");
    alert.classList.add("alert");
    alert.innerHTML = `
        <i class="bi bi-exclamation-circle"></i>
        <span>Your password must be at least 1 number.</span>
        `;
    descContainer.appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 5000);
  }

  if (!password1.match(symbols)) {
    const alert = document.createElement("div");
    alert.classList.add("alert");
    alert.innerHTML = `
        <i class="bi bi-exclamation-circle"></i>
        <span>Your password must be at least 1 special character.</span>
        `;
    descContainer.appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 5000);
  }

  if (!password1.localeCompare(password2) == 0) {
    const alert = document.createElement("div");
    alert.classList.add("alert");
    alert.innerHTML = `
        <i class="bi bi-exclamation-circle"></i>
        <span>Confirm password not match.</span>
        `;
    descContainer.appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 5000);
  } else {
    const alert = document.createElement("div");
    alert.classList.add("alert");
    alert.innerHTML = `
        <i class="bi bi-check-circle"></i>
        <span>Your password has been reset.</span>
        `;
    descContainer.appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 5000);
  }
});
