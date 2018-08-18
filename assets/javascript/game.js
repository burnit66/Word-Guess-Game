var wins = 0;
var losses = 0;
var chancesLeft = 10;
var answerArray = [];
var guessed = [];
var wordChoices = ["lion", "elephant", "zebra", "giraffe", "monkey", "bear", "tiger", "flamingo"];
var word = wordChoices[Math.floor(Math.random() * wordChoices.length)];
var remainingLetters = word.length;
var correctLetter = [];

var renderQuestion = function () {

    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
}
renderQuestion();

var reset = function () {
    answerArray = [];
    correctLetter = [];
    word = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    remainingLetters = word.length;
    renderQuestion();
    console.log(word);
}


document.onkeyup = function (event) {
    var userInput = event.key.toLowerCase();

    for (var j = 0; j < word.length; j++) {
        if (word[j] === userInput) {
            answerArray[j] = userInput;
            correctLetter.push(String(word[j]));
            remainingLetters--;
        }
    }

    if (userInput === "a" || userInput === "b" || userInput === "c" || userInput === "d" || userInput === "e" || userInput === "f" || userInput === "g" || userInput === "h" || userInput === "i" || userInput === "j" || userInput === "k" || userInput === "l" || userInput === "m" || userInput === "n" || userInput === "o" || userInput === "p" || userInput === "q" || userInput === "r" || userInput === "s" || userInput === "t" || userInput === "u" || userInput === "v" || userInput === "w" || userInput === "x" || userInput === "y" || userInput === "z") {
        for (var k = 0; k < correctLetter.length; k++) {
            if (userInput !== correctLetter[k]) {
                guessed.push(String(" " + userInput));
                chancesLeft--;
            }
        }
        console.log("correct letter string: " + correctLetter);
    }

    if (remainingLetters == 0) {
        wins++;
        reset();
        console.log("remaining letters: " + remainingLetters);
    }

    document.querySelector("#wordPlace").textContent = answerArray;
    document.querySelector("#winsPlace").textContent = wins;
    document.querySelector("#guessedAlready").textContent = guessed;
    document.querySelector("#guessesPlace").textContent = chancesLeft;
};


console.log("chances left: " + chancesLeft);
console.log(word);
