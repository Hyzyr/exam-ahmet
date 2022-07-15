let header = document.getElementById("header");
let menu = document.getElementById("nav");
let menuBtn = document.getElementById("burger");
let body = document.body;
menuBtn.onclick = function () {
  header.classList.toggle("active");
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    header.classList.remove("active");
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};

// Header Scroll
$(window).scroll(function () {
  var sticky = $('.header'),
    scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('bg');
  else sticky.removeClass('bg');
});

// Features
let features__items = document.querySelectorAll(".features__item");

features__items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active")
  })
})

// Benefits
let benefits__items = document.querySelectorAll(".benefits__item");

benefits__items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active")
  })
})