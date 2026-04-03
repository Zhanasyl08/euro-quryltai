export default {
  name: "App",
  data() {
    return {
      menuOpen: false,
    };
  },
};
r = document.getElementById("burger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
});