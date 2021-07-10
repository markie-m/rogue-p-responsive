// This is the code that makdes the Locations page animated globe icon function
function globespin() {
  var a;
  a = document.getElementById("globe");
  a.innerHTML = "&#xf57d;";
  setTimeout(function () {
      a.innerHTML = "&#xf57e;";
    }, 1000);
  setTimeout(function () {
      a.innerHTML = "&#xf57c;";
    }, 2000);
}
globespin();
setInterval(globespin, 3000);
// End of Locations page animated icon JS


// This is the code that makdes the Gallery page slideshow function
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
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