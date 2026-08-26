const toggle = document.getElementById("navToggle");
const menu = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});