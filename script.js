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

let footer = document.getElementById("copyright");
console.log(footer);
let date = new Date();
date = date.getFullYear();

footer.textContent = "@" + date + ". All rights reserved";
