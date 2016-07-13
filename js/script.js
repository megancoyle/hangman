// store alphabet
var alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// create buttons for alphabet
for (i = 0; i < alphabet.length; i++) {
  var alphabetBtn = document.getElementById("alphabet-buttons");
  alphabetBtn.innerHTML = alphabetBtn.innerHTML + '<li>' + alphabet[i] +'</li>';
}

// store word
// var word = prompt("Player 1, pick a word!");
var word = "pizza";

// create placeholder _ for word
for (i = 0; i < word.length; i++) {
  var selectedWord = document.getElementById("selected-word");
  selectedWord.innerHTML = selectedWord.innerHTML + '_';
}

// store a hint
// if hint is used, an element is drawn

// user has eleven guesses

// convert alphabet to clickable text

  // way to compare word to guesses
  // guesses = when user clicks on a specific letter

// for each guess, check if it matches letter in word
  // if matches, show word
  // else, draw Hangman

// on each frame, run animation
