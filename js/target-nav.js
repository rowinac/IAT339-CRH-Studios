//  Sticky nav JS referenced from https://www.w3schools.com/howto/howto_js_navbar_sticky.asp

window.onscroll = function() { 
	// call the function once the user starts scrolling
	make_sticky();
};

// grab target-nav from document
var navPos = document.getElementById("nav-pos");
var menu = document.getElementById("menu");
// find where the target nav is originally positioned

var footerTop = document.getElementById("main-footer");
var unstick = footerTop.offsetTop;

function make_sticky() {
	var menuHeight = menu.offsetHeight;
	// if the height of the nav + the positioned you scroll is greater than
	// the position of the footer, remove the sticky class from the nav
	if (window.pageYOffset + menuHeight >= unstick) {
		navPos.classList.remove("sticky");
	} else {
		navPos.classList.add("sticky");
	}
}


// detecting pixels in js dynamically referenced from https://techstacker.com/javascript-detect-if-screen-width-is-greater-or-less-than/
window.addEventListener("resize", function() {
  // if the window is at least a certain size, expand the hamburger 
  if (window.matchMedia("(min-width: 1355px)").matches) {
  	document.getElementById("nav-checkbox").checked = true;
  } else {
  	// if the window is smaller than a certain size, collapse the hamburger 
    document.getElementById("nav-checkbox").checked = false;
  }
});
