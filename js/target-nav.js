//  Sticky nav JS referenced from https://www.w3schools.com/howto/howto_js_navbar_sticky.asp

window.onscroll = function() { 
	// call the function once the user starts scrolling
	make_sticky();
};

// grab target-nav from document
var targetNav = document.getElementById("menu-toggle");
// find where the target nav is originally positioned
var sticky = targetNav.offsetTop; 

function make_sticky() {
	// when the nav is less than where it originally was, make it sticky
	if (window.pageYOffset >= sticky) {
		targetNav.classList.add("sticky")
	} else {
		targetNav.classList.remove("sticky");
	}
}


// detecting pixels in js dynamically referenced from https://techstacker.com/javascript-detect-if-screen-width-is-greater-or-less-than/
window.addEventListener("resize", function() {
  // if the window is at least a certain size, expand the hamburger 
  if (window.matchMedia("(min-width: 1362px)").matches) {
  	document.getElementById("nav-checkbox").checked = true;
  } else {
  	// if the window is smaller than a certain size, collapse the hamburger 
    document.getElementById("nav-checkbox").checked = false;
  }
});
