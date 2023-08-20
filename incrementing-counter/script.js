const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerText = "0";

  const update = () => {
    const target = +counter.getAttribute("data-target");
    const n = +counter.innerText;
    const increment = target / 200;

    if (n < target) {
      counter.innerText = `${Math.ceil(n + increment)}`;
      setTimeout(update, 1);
    } else {
      counter.innerText = target;
    }
  };
  update();
});
