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
var container = document.getElementById("container");
var guesses = [];
var keepScore = [];
// set limit for user
var lives = 12;
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
      return e.target;
  }

  // user guesses a letter by clicking on a letter button
  alphabetBtns.onclick = function(event) {
      var target = getEventTarget(event);
      // make sure target clicked is li
      if ((event.target.tagName.toLowerCase() === 'li')) {
        var guess = (target.innerText);
        target.setAttribute("class", "active");
        // disable click event after guess is selected
        target.style.pointerEvents = 'none';
        guesses.push(guess);
        keepScore.push(guess);

        // keep track of the number of guesses
        numberOfGuesses++;
        score.innerHTML = numberOfGuesses;
        maskWord();
        evaluateGuess();
      }
    }

}

// replacing an index of a string with a specific character
String.prototype.replaceAt = function(index, character) {
  return this.substr(0, index) + character + this.substr(index+character.length);
}

function maskWord() {
  // for each guess, check if it matches letter in word
  for (i = 0; i < word.length; i++) {
    // turn guesses array into a string
    // update correct letter in masked word
    var guessString = guesses.join("");
    var regexp = new RegExp('[^' + guessString + ']','g');
    var display = word.replace(regexp, '_');
    selectedWord.innerHTML = display;
  }
}

// on each frame, run animation of hangman
function evaluateGuess() {
  var guess = keepScore.pop();
  if (word.indexOf(guess) >-1) {
  } else {
    lives--;
    if (lives == 11) {
      frame1();
    } else if (lives == 10) {
      frame2();
    } else if (lives == 9) {
      frame3();
    } else if (lives == 8) {
      frame4();
    } else if (lives == 7) {
      frame5();
    } else if (lives == 6) {
      frame6();
    } else if (lives == 5) {
      frame7();
    } else if (lives == 4) {
      frame8();
    } else if (lives == 3) {
      frame9();
    } else if (lives == 2) {
      frame10();
    } else if (lives == 1) {
      frame11();
    } else {
      // game over view
      container.innerHTML = "<h2>Game Over</h2><a id='play-again' href='#'>Play Again?</a>";
      var playAgain = document.getElementById("play-again");
      playAgain.onclick = function(e) {
        e.preventDefault();
        location.reload();
      }
    }
  }
}

// store a hint
// if hint is used, an element is drawn
// way to compare word to guesses
