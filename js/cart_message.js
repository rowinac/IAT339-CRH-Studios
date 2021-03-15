'use strict'; 

// make the initial cart message hidden
// var cartMessage = document.querySelector('#cart-message'); 
// cartMessage.classList.add('hidden');
// cartMessage.setAttribute('aria-hidden', 'true');

var addToCart = document.querySelector('#add-to-cart');

// if the Add to Cart button has been clicked, show the cart message
addToCart.addEventListener('click', 
	function() {
		console.log('button has been clicked.');

		// change the button label and make it disabled after adding it to cart
		addToCart.innerHTML = "Added to Cart!";
		addToCart.disabled = true

		// if (cartMessage.classList.contains('hidden')) {
		// 	cartMessage.classList.remove('hidden');
		// 	cartMessage.setAttribute('aria-hidden', 'false');
		// } 
	}
);