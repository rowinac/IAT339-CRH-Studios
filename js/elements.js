
// ACCORDION JS
// ACCORDION JS REFERENCED FROM https://www.w3schools.com/howto/howto_js_accordion.asp
var numOfAccs = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < numOfAccs.length; i++) {
  numOfAccs[i].addEventListener("click", function() {
    this.classList.toggle("active");
    
    var panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "grid";
    }

    // slide down animation 
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

  });
}

// QUANTITY BOX referenced from http://www.aspdotnetkhan.com/create-number-incrementers-with-plus-minus-buttons-136.aspx
jQuery('.quantity').each(function () {
    var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    buttonUp = spinner.find('.quantity-up'),
    buttonDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

    buttonUp.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

    buttonDown.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

});

