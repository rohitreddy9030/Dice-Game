                    // Image one
var randomNumber1 = Math.floor (Math.random() * 6 ) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource="images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

                    // image2
var randomNumber2 = Math.floor (Math.random() * 6 ) + 1;

var randomDiceImage = "dice" + randomNumber2 + ".png";

var randomImageSource="images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src",randomImageSource);


                    // Compact Code
// document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + (Math.floor (Math.random() * 6 ) + 1) + ".png");


if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 2 won! 🚩";
}
else
{
  document.querySelector("h1").innerHTML="🚩 It's a Draw 🚩";
}
