const btn = document.getElementById("btnmenu");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

