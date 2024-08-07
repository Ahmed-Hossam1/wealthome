let bars_icon = document.querySelector(".bars");
let links = document.querySelector(".links");

bars_icon.addEventListener("click", () => {
  links.classList.toggle("hide_links_list");
});

let login = document.getElementById("login");
let signup = document.getElementById("signup");

login.addEventListener("click", () => {
  window.location = "login.html";
});

signup.addEventListener("click", () => {
  window.location = "signup.html";
});

let header = document.querySelector("header");
let main_section = document.querySelector(".main");
window.addEventListener("scroll", () => {
  if (window.scrollY > main_section.offsetTop + 100) {
    header.style.backgroundColor = "#0d3166";
    header.style.transition = ".3s ease";
  } else {
    header.style.backgroundColor = "";
  }
});

let heart = document.querySelectorAll(".fa-heart");

heart.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("fa-solid");
  });
});

const ScrollRevealOptions = {
  origin: "left",
  distance: "100px",
  duration: 1000,
};

window.addEventListener("load", () => {
  ScrollReveal().reveal(".main .text", {
    ...ScrollRevealOptions,
    delay: 500,
  });

  ScrollReveal().reveal(".main  p", {
    ...ScrollRevealOptions,
    delay: 1200,
    origin: "bottom",
  });

  ScrollReveal().reveal(".main .options", {
    ...ScrollRevealOptions,
    delay: 2000,
    origin: "right",
  });
  ScrollReveal().reveal(".main .options .buy", {
    ...ScrollRevealOptions,
    delay: 2500,
    origin: "right",
  });

  ScrollReveal().reveal(".main .Property", {
    ...ScrollRevealOptions,
    delay: 3000,
    origin: "right",
  });
  ScrollReveal().reveal(".main .location", {
    ...ScrollRevealOptions,
    delay: 3500,
    origin: "right",
  });
  ScrollReveal().reveal(".main .search", {
    ...ScrollRevealOptions,
    delay: 4000,
    origin: "bottom",
  });
});
