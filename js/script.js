// store alphabet
var alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// need to track this throughout game
var numberOfGuesses = 0;
// store word
// var word = prompt("Player 1, pick a word!");
var word = "pizza";
var selectedWord = document.getElementById("selected-word");
var guesses = [];


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
      guesses.push(guess);
      // for (i = 0; i < word.length; i++) {
      //   if (guess == word[i]) {
      //     // selectedWord.replace(selectedWord[i], guess);
      //     selectedWord.innerHTML = guess;
      //   }
      // }

      // keep track of the number of guesses
      numberOfGuesses++;
      // console.log(numberOfGuesses);
      maskWord();
    }
}
// function that masks word
// on click it triggers, if a guess is made it will print out the guess in place of the letter, otherwise it will print an underscore
// all the function knows about is the word and what has been guessed

function maskWord() {
  // loop through guesses

  // see if they match letters in word
  for (i = 0; i < word.length; i++) {
    if (guess == word[i]) {
        console.log(guess);
    } else {
      console.log("_");
    }
  }
  // create placeholder for word
  // for (i = 0; i < word.length; i++) {
  //   selectedWord.innerHTML = selectedWord.innerHTML + '_';
  // }

    // if (word.includes(compareCurrentGuess)) {
    //
    //   console.log(compareCurrentGuess);
    // }
    // else if (!word.includes(currentGuess)) {
    //   console.log("nope");
    // }
    // else {
    //   console.log("nope");
    // }
  // }
  // if so print the letters, otherwise print _

// }
  // for (i = 0; i < word.length; i++) {
  //   if (guess == word[i]) {
  //
  //   }
  // }
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
