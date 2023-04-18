//we want to get a random number of image, we have 6 images
//For player 1

var randomNumber1 = Math.floor(Math.random() * 6 + 1);
//change dice1. to random number
var randomDiceImagePath = "dice" + randomNumber1 + ".png";
var randomImageSourcePath = "images/" + randomDiceImagePath; // images\dice6.png"

var image1 = document.querySelectorAll("img")[0]; //select element (class img)
image1.setAttribute("src", randomImageSourcePath); //set new path

//For player 2

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
//change dice1. to random number
var randomDiceImagePath2 = "dice" + randomNumber2 + ".png";
var randomImageSourcePath2 = "images/" + randomDiceImagePath2; // images\dice6.png"

//select element (class img)
var image2 = document.querySelectorAll("img")[1];
//set new path
image2.setAttribute("src", randomImageSourcePath2);

//change text depending on who the winner is
if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 won!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 won!";
}
