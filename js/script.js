"use strict";

var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var alphabetBtns = document.getElementById("alphabet-buttons");
var numberOfGuesses = 0;
var shuffleWordsArray = shuffle(words);
var word = shuffleWordsArray.pop();
var hiddenWord;
var updateHiddenWord;
var selectedWord = document.getElementById("selected-word");
var container = document.getElementById("container");
var guesses = [];
var keepScore = [];
var gamesRight = 0;
var lives = 11;
var score = document.getElementById("score");

// event listener used for each specific alphabet button
function getEventTarget(e) {
  return e.target;
}

function createButtons() {
  for (var i = 0; i < alphabet.length; i++) {
    alphabetBtns.innerHTML =
      alphabetBtns.innerHTML + "<li>" + alphabet[i] + "</li>";
  }
}

function createWordPlaceholder() {
  for (var i = 0; i < word.length; i++) {
    selectedWord.innerHTML = selectedWord.innerHTML + "_";
  }
  hiddenWord = selectedWord.innerText;
}

function evaluateGuess() {
  var guess = keepScore.pop();
  if (word.indexOf(guess) > -1) {
  } else if (lives <= 11 && lives > 0) {
    lives--;
    drawHangman();
  } else {
    // game over view
    container.innerHTML =
      "<h2>Game Over</h2><p>The correct word was: <span id='answer'></span></p><a id='play-again' href='#'>Play Again?</a>";
    var answer = document.getElementById("answer");
    answer.innerHTML = word;
    var playAgain = document.getElementById("play-again");
    playAgain.onclick = function(e) {
      e.preventDefault();
      location.reload();
    };
  }
}

function guess() {
  alphabetBtns.onclick = function(event) {
    var target = getEventTarget(event);
    // make sure target clicked is li
    if (event.target.tagName.toLowerCase() === "li") {
      var guess = target.innerText;
      target.setAttribute("class", "active");
      // disable click event after guess is selected
      target.style.pointerEvents = "none";
      guesses.push(guess);
      keepScore.push(guess);

      // keep track of the number of guesses
      numberOfGuesses++;
      score.innerHTML = numberOfGuesses;
      maskWord();
      evaluateGuess();
    }
  };
}

function startGame() {
  createButtons();
  createWordPlaceholder();
  guess();
}

// replacing an index of a string with a specific character
String.prototype.replaceAt = function(index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};

function maskWord() {
  // for each guess, check if it matches letter in word
  var guessString = guesses.join("");
  var regexp = new RegExp("[^" + guessString + "]", "g");
  var display = word.replace(regexp, "_");
  for (var i = 0; i < word.length; i++) {
    // update correct letter in masked word
    selectedWord.innerHTML = display;
    // if the right answer is guessed, let the user know
    if (word == display) {
      setTimeout(function() {
        container.innerHTML =
          "<h2>You Got it Right! The word was <span id='answer'></span></h2><a id='play-again' href='#'>Play Again?</a>";
        var answer = document.getElementById("answer");
        answer.innerHTML = word;
        var playAgain = document.getElementById("play-again");
        playAgain.onclick = function(e) {
          e.preventDefault();
          location.reload();
        };
      }, 900);
    }
  }
  // keep score of games that are right - need to add this to local storage
  if (word == display) {
    return gamesRight++;
  }
}

startGame();
