const navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {
  navbar.classList.remove("bg-transparent", window.scrollY > 0);
  navbar.classList.toggle("bg-nav-color", window.scrollY > 0);
 
});

/* Acordion*/

var buttons = document.querySelectorAll(".btn-acordion");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    var header = event.target.closest(".card-header");
    var activeHeader = document.querySelector(".card-header.active");
    if (activeHeader) {
      activeHeader.classList.remove("active");
    }
    header.classList.add("active");
  });
}
