// store alphabet
var alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// need to track this throughout game
var numberOfGuesses = 0;
// store word
// var word = prompt("Player 1, pick a word!");
var word = "pizza";
var hiddenWord;
var updateHiddenWord;

var selectedWord = document.getElementById("selected-word");
var guesses = [];
var score = document.getElementById("score");

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
  hiddenWord = selectedWord.innerText;

  // event listener for each specific alphabet button
  function getEventTarget(e) {
      e = e || window.event;
      return e.target || e.srcElement;
  }

  // user guesses a letter by clicking on an letter button
  alphabetBtns.onclick = function(event) {
      var target = getEventTarget(event);
      var guess = (target.innerHTML);
      guesses.push(guess);
      // for (i = 0; i < word.length; i++) {
      //   if (guess == word[i]) {
      //     // selectedWord.replace(selectedWord[i], guess);
      //     selectedWord.innerHTML = guess;
      //   }
      // }

      // keep track of the number of guesses
      numberOfGuesses++;
      score.innerHTML = numberOfGuesses;
      maskWord();
    }
}

// replacing an index of a string with a specific character
String.prototype.replaceAt = function(index, character) {
  return this.substr(0, index) + character + this.substr(index+character.length);
}

function maskWord() {
  // loop through guesses
  // for (i = 0; i < guesses.length; i++) {
  //   var guess = guesses[i];
  //   if (word.indexOf(guess) > -1) {
  //     updateHiddenWord = hiddenWord.replaceAt(i, word[i]);
  //     selectedWord.innerHTML = updateHiddenWord;
  //   }
  // }

  for (i = 0; i < word.length; i++) {
    // turn guesses array into a string
    var guessString = guesses.join("");
    var regexp = new RegExp('[^' + guessString + ']','g');
    var display = word.replace(regexp, '_');
    selectedWord.innerHTML = display;
  }
}

  // // loop through word - this was working somewhat, was overriding html though
  //   for (i = 0; i < word.length; i++) {
  //   if (guesses[guesses.length-1] == word[i]) {
  //   // replace the letter where it appears in the word
  //   updateHiddenWord = hiddenWord.replaceAt(i, word[i]);
  //     selectedWord.innerHTML = updateHiddenWord;
  //   }
  // }
// }

// store a hint
// if hint is used, an element is drawn

// set limit for user

// convert alphabet to clickable text

  // way to compare word to guesses
  // guesses = when user clicks on a specific letter

// for each guess, check if it matches letter in word
  // if matches, show word
  // else, draw Hangman

// on each frame, run animation
