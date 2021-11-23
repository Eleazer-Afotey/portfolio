/*
Display menu when the menu button is clicked
*/

var x = document.getElementById("menuButton");
var y = document.getElementById("menu");

function getMobileMenu() {
  console.log(x.style.display);
  if (y.style.display == "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}

x.addEventListener("click", getMobileMenu);
