// store alphabet
var alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// convert alphabet to clickable text

// store word

  // create placeholder _ for word
  // way to compare word to guesses
  // guesses = when user clicks on a specific letter

// for each guess, check if it matches letter in word
  // if matches, show word
  // else, draw Hangman

// drawing the Hangman
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
