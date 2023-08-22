const cardHeader = document.querySelector(".card-header");
const cardTitle = document.querySelector(".card-title");
const cardExcerpt = document.querySelector(".card-excerpt");
const authorImg = document.querySelector(".author-img");
const authorName = document.querySelector(".author-name");
const date = document.querySelector(".date");

const placeholder = document.querySelectorAll(".placeholder");
const placeholderText = document.querySelectorAll(".placeholder-text");

function getData() {
  cardHeader.innerHTML = `
    <img
        src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Burger & Chips"
    />`;
  cardTitle.innerHTML = `Lorem ipsum dolor sit amet`;
  cardExcerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam velit quam eius. A porro officiis, nemo cum eligendi est minima.`;
  authorImg.innerHTML = `
    <img
        src= "https://randomuser.me/api/portraits/men/32.jpg"
        alt="Jhon Doe"
        width="100"
        height="100"
    />`;
  authorName.innerHTML = `John Doe`;
  date.innerHTML = `Nov 22, Tue`;

  placeholder.forEach((ph) => {
    ph.classList.remove("placeholder");
  });
  placeholderText.forEach((ph) => {
    ph.classList.remove("placeholder-text");
  });
}

setTimeout(getData, 2000);