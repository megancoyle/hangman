// store alphabet
var alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// need to track this throughout game
var numberOfGuesses = 0;
// store word
// var word = prompt("Player 1, pick a word!");
var word = "pizza";
var hiddenWord;

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

// function that masks word
// on click it triggers, if a guess is made it will print out the guess in place of the letter, otherwise it will print an underscore
// all the function knows about is the word and what has been guessed

function maskWord() {
  // loop through word
  for (i = 0; i < word.length; i++) {
    // if the last item in the guesses array is in the word
    if (guesses[guesses.length-1] == word[i]) {
      // replace the letter where it appears in the word
      var letterShowing = hiddenWord.replaceAt(i, word[i]);
      console.log(letterShowing);

      // var replaceHiddenWord = hiddenWord.replace(hiddenWord[i], word[i])
      // console.log(hiddenWord);
      // selectedWord.innerHTML = hiddenWord;
    }
  }
  // see if last guess in guesses array matches letter in word
  // replace underscore with same index in hiddenWord as word index with actual letter
  // if so print the letters, otherwise print _
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
