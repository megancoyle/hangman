// store alphabet
var alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numberOfGuesses = 0;
// store word
// var word = prompt("Player 1, pick a word!");
var word = "pizza";
var selectedWord = document.getElementById("selected-word");


startGame();

function startGame(){
  // create buttons for alphabet
  for (i = 0; i < alphabet.length; i++) {
    var alphabetBtns = document.getElementById("alphabet-buttons");
    alphabetBtns.innerHTML = alphabetBtns.innerHTML + '<li>' + alphabet[i] +'</li>';
  }

  // create placeholder for word
  for (i = 0; i < word.length; i++) {
    selectedWord.innerHTML = selectedWord.innerHTML + '_';
  }

  // user guesses a letter by clicking on an letter button
  var btns = document.getElementById("selected-word").getElementsByTagName('li');
  btns.onclick = function () {
    // var guess = (this.innerHTML);
    // for (i = 0; i < word.length; i++) {
    //   if (guess == word[i]) {
    //     console.log(word[i]);
    //
    //   }
    // }
  }
}

// var letterGuess = prompt("guess!");
// checkLetterInWord(letterGuess);
function guessLetter() {
  console.log("hello");
  // var guess = (_this.innerHTML);
  // console.log(guess);

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
