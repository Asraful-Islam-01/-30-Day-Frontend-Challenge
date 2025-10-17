let currentSlide = 0;
const image = document.querySelectorAll(".carousel-image");
const indicators = document.querySelectorAll(".indicator");
const titles = {
  "Random Image 1",
  "Random Image 2",
  "Random Image 3",
  "Random Image 4",
  "Random Image 5"
}

function showSlide(n) {
  if (n >= image.length) currentSlide = 0;
  if (n < 0) currentSlide = images.length - 1;

  images.forEach((img) => img.classList.remove("active"));
  indicators.forEach((ind) => ind.classList.remove("active"));

  images[currentSlide].classList.add("active");
  indicators[currentSlide].classList.add("active");

  document.getElementById("imageTitle").textContent = titles[currentSlide];
  document.getElementById("counter").textContent = `${currentSlide + 1} / ${images.length}`;
}

function changeSlide(direction) {
  currentSlide += direction;
  showSlide(currentSlide);  
} 