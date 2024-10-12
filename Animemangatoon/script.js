const carouselItems = document.getElementById("carousel-items");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const maxIndex = carouselItems.children.length - 1;

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarousel();
  }
});

function updateCarousel() {
  const itemWidth = carouselItems.children[0].offsetWidth + 16; // Add margin
  carouselItems.style.transform = `translateX(${-itemWidth * currentIndex}px)`;
}
