//hamburger functions 
const $menuBtn = document.querySelector(".menu-btn");
//const navMenu = document.querySelector(".menu");
let isMenuOpen = false;

$menuBtn.addEventListener("click", () => {
  if (!isMenuOpen) {
    $menuBtn.classList.add("open");
  } else {
    $menuBtn.classList.remove("open");
  }

  isMenuOpen = !isMenuOpen;
});


//below is all the menu stuff for the hamburger
//none if it is working right now
const hamburger = document.querySelector(".menu-btn__burger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))