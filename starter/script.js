'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // repeated code
    const displayMessage = function (message) {
        document.querySelector('.message').textContent = message;
    }

    // when there is no input
    if (!guess) {
        //   displayMessage(xxxxxxx) = '⛔️ No number!';
        displayMessage('⛔️ No number!')
        // when player wins
    } else if (guess === secretNumber) {
        displayMessage('Correct Number');

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // when guess is too high!
    } else if (guess > secretNumber) {

        if (score > 1) {
            displayMessage('Too high!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }

        // when guess is too low

    } else if (guess < secretNumber) {

        if (score > 1) {
            displayMessage('Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});