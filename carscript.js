// Begin Slideshow 
let slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
showSlides();

// function plusSlides(inc) {
//   slideIndex = slideIndex + inc;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   // clearInterval(showSlides);
//   // setInterval(showSlides, 3500);
// }

// Slideshow function

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
}

setInterval(showSlides, 3500)
// End Slideshow function