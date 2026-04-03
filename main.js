const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("closebutton");
const overlay = document.getElementById("overlay");

burger.addEventListener("click", () => {
    menu.classList.add("active");
    overlay.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.style.display = "none";
});