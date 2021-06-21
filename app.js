const mode = document.querySelector(".switch");
const ball = document.querySelector(".ball");
const card = document.querySelectorAll(".card");
const bottomCard = document.querySelectorAll(".bottom-card");
const h3 = document.getElementsByTagName("h3");
const year = document.querySelectorAll(".year");
const heading = document.querySelector(".heading");
const bg = document.querySelector(".bg");
const darkMode = document.querySelector(".darkmode");

// const body = document.getElementsByTagName("body");
// console.log(body);
// console.log(card);
// console.log(bottomCard);
mode.addEventListener("click", moveball);

function moveball(e) {
  if (mode.checked == true) {
    darkMode.textContent = "Dark Mode";
    mode.classList.add("switch-dark");
    ball.classList.add("ball-dark");
    ball.style.transform = "translateX(0px)";
    ball.style.transition = "transform 0.5s ease";
    // ball.style.transform = "translateX(33px)";
    // ball.style.transition = "transform 0.5s ease";
    document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
    card.forEach(e => {
      e.classList.add("card-dark");
    });
    bottomCard.forEach(e => {
      e.classList.add("bottom-card-dark");
    });
    year.forEach(e => {
      e.classList.add("year-dark");
    });
    Array.from(h3).forEach(e => {
      e.classList.add("h3-dark");
    });
    heading.classList.add("heading-dark");
    bg.classList.add("bg-dark");
    // mode.style.background = "hsl(225, 100%, 98%)";
    // ball.style.background = "blue";
  } else if (mode.checked == false) {
    darkMode.textContent = "Light Mode";
    mode.classList.remove("switch-dark");
    ball.classList.remove("ball-dark");

    ball.style.transform = "translateX(33px)";
    ball.style.transition = "transform 0.5s ease";
    document.body.style.backgroundColor = "hsl(0, 0%, 100%)";
    card.forEach(e => {
      e.classList.remove("card-dark");
    });
    bottomCard.forEach(e => {
      e.classList.remove("bottom-card-dark");
    });
    year.forEach(e => {
      e.classList.remove("year-dark");
    });
    Array.from(h3).forEach(e => {
      e.classList.remove("h3-dark");
    });
    heading.classList.remove("heading-dark");
    bg.classList.remove("bg-dark");
    // mode.style.background = "hsl(228, 12%, 44%)";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  mode.checked = true;
});
