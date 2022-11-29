var randomNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = document.querySelector('.guess');
var checkBtn = document.querySelector('.check');
var btnPlayAgain = document.querySelector('.again');
var message = document.querySelector('.message');
var generatedNumber = document.querySelector('.number');
var bodyEl = document.querySelector('body');
var scores = document.querySelector('.score');
var score = 20;
checkBtn.addEventListener('click', function () {
    var userGuessValue = +(userGuess.value);
    if (userGuessValue === randomNumber) {
        message.textContent = "Congrats You Win The Game";
        bodyEl.style.backgroundColor = 'green';
        generatedNumber.textContent = randomNumber;
    }
    else if (userGuessValue > randomNumber) {
        message.textContent = "Too High";
        score -= 1;
        scores.textContent = score;
    }
    else if (userGuessValue < randomNumber) {
        message.textContent = "Too Low";
        score--;
        scores.textContent = score;
    }
    else if (!userGuessValue) {
        message.textContent = "Please Guess a Number";
    }
});
btnPlayAgain.addEventListener('click', function () {
    bodyEl.style.backgroundColor = "#222";
    generatedNumber.textContent = '?';
    message.textContent = "Start Guessing";
    scores.textContent = 20;
});
