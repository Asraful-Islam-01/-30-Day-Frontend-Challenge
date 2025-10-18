//Start at the first image(index 0)
let currentSlide = 0;

// Collect all the images and dots (indicators)
const images = document.querySelectorAll(".carousel-image");
const indicators = document.querySelectorAll(".indicator");

//Titiles for each image
const titles = [
  "Beautiful Image 1",
  "Beautiful Image 2",
  "Beautiful Image 3",
  "Beautiful Image 4",
  "Beautiful Image 5"
];

//Show a specific slide
function showSlide(n) {
  if (n >= images.length) {
    currentSlide = 0;  //go to the first slide
  } else if (n < 0) {
    currentSlide = images.length - 1; //go to the last slide (How can it be the last slide!)
  } else {
    currentSlide = n;
  }

  //Remove the "active" class from all images and indicators
  images.forEach((img) => img.classList.remove("active"));
  indicators.forEach((ind) => ind.classList.remove("active"));
  
  //Add "active" class to the current image and it's dot
  images[currentSlide].classList.add("active");
  indicators[currentSlide].classList.add("active");

  //Update the title and counter text
  document.getElementById("imageTitle").textContent = titles[currentSlide];
  document.getElementById("counter").textContent = (currentSlide + 1) + "/" + images.length;
}

//Change to the next or previous slide
function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

//Jump directly to a specific slide
function goToSlide(index) {
  showSlide(index);
}

//Keyboard support (Left/Right arrows)
document.addEventListener("keydown", function(e)) {
  if(e.key === "ArrowLeft") {
    changeSlide(-1)
  } else if(e.key === "ArrowRight") {
    changeSlide(1)
  }
}

showSlide(0);