const menuBtn = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("show-menu");
});

document.addEventListener("click", (event) => {
  const targetElement = event.target;

  if (!menu.contains(targetElement) && !menuBtn.contains(targetElement)) {
    menuBtn.classList.remove("open");
    menu.classList.remove("show-menu");
  }
});