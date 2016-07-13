// store alphabet
var alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// need to track this throughout game
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

  // event listener for each specific alphabet button
  function getEventTarget(e) {
      e = e || window.event;
      return e.target || e.srcElement;
  }

  // user guesses a letter by clicking on an letter button
  alphabetBtns.onclick = function(event) {
      var target = getEventTarget(event);
      var guess = (target.innerHTML);
      console.log("clicked!" + guess);
      // document.getElementsByTagName("li").className = " active";
      for (i = 0; i < word.length; i++) {
        if (guess == word[i]) {
          // selectedWord.replace(selectedWord[i], guess);
          selectedWord.innerHTML = guess;
        }
      }
    }

}

// var letterGuess = prompt("guess!");
// checkLetterInWord(letterGuess);
// function guessLetter() {
//   console.log("hello");
//   // var guess = (_this.innerHTML);
//   // console.log(guess);
//
// }

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
