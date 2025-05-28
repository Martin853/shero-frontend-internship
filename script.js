// Glide
document.addEventListener("DOMContentLoaded", function () {
  // Products Carousel
  new Glide(".products-carousel", {
    type: "carousel",
    perView: 3,
    breakpoints: {
      1200: { perView: 3 },
      768: { perView: 2 },
      480: { perView: 1 },
    },
  }).mount();

  // Featured Products Carousel
  new Glide("#featured", {
    type: "carousel",
    perView: 4,
    breakpoints: {
      1200: { perView: 4 },
      768: { perView: 2 },
      480: { perView: 1 },
    },
  }).mount();
});

// Mobile Navigation
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
