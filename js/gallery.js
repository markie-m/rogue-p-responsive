
// This is the code that makes the Gallery page slideshow function
var slideIndex = 1;
showSlides(slideIndex);

const next = document.querySelector('.next');
next.addEventListener('click', function() {
  plusSlides(1);
})
// Here we're declaring a constant named "next" and defining it as anything in the HTML document with the class name ".next". Then we're adding an event listener to that constant so when an element with the class .next is clicked, the function plusSlides(1) will run, advancing the slides by 1.

const prev = document.querySelector('.prev');
prev.addEventListener('click', function() {
  plusSlides(-1);
})

// Next/previous controls
function plusSlides(n) {
  if (typeof NaN === slideIndex){
    slideIndex = 1;
  }
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
// End of Gallery page slideshow JS