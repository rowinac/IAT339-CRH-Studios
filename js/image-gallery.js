// IMAGE GALLERY JS 
// Javascript referenced from https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp

var slideIndex = 1;
showSlides(slideIndex);

// image controls for thumbnails; ie.// selection
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("product-preview");
  var dots = document.getElementsByClassName("demo");
 
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
    dots[i].className = dots[i].className.replace(" thumbnail-active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " thumbnail-active";
}