const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("show-menu");
});

// Event listener para fechar o menu ao clicar fora dele
document.addEventListener("click", (event) => {
  const targetElement = event.target;

  // Verifica se o clique foi feito fora do menu e do botão do menu
  if (!menu.contains(targetElement) && !menuBtn.contains(targetElement)) {
    menuBtn.classList.remove("open");
    menu.classList.remove("show-menu");
  }
});
