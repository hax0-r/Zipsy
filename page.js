window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function darkmode() {
  let darkMode = document.body;
  darkMode.classList.toggle(`darkMode`);
}
