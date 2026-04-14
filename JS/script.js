const toggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");

toggle.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", !expanded);
  menu.classList.toggle("ativo");
});
