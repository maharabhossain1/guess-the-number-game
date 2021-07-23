'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input number
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number !';

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ' correct Number !';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.background =
      'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(171,12,145,1) 46%, rgba(14,10,112,1) 100%)';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when its too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number is too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //when its too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number is too low !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing ...';
  document.querySelector('body').style.background =
    'linear-gradient( 225deg,rgba(2, 0, 36, 1) 0%,rgba(98, 9, 121, 1) 44%,rgba(14, 10, 112, 1) 100%)';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
