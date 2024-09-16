// Menu Navbar
let menu = document.getElementById("menu-icone");
let navList = document.querySelector(".nav-items");
let list = document.querySelectorAll("nav-item");
let scrollTop = document.getElementById("scrollTop");
console.log(list);
menu.addEventListener("click", () => {
  navList.classList.toggle("active");
  menu.classList.toggle("fa-times");
});

window.onscroll = function () {
  menu.classList.remove("fa-times");
  navList.classList.remove("active");
  if (scrollY >= 400) {
    scrollTop.style.display = "flex";
  } else {
    scrollTop.style.display = "none";
  }
};
// ===============================================================
