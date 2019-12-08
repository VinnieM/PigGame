"use strict"

let scores, activePlayer = 0,
  totalScore = 0;

initialize();

/**
 * This function sets the values to the default state.
 */
function initialize() {
  document.querySelector('.dice')
    .style.display = 'none';
  for (var i = 0; i <= 1; i++) {
    document.getElementById('totalScore-' + i)
      .textContent = '0';
    document.getElementById('currentScore-' + i)
      .textContent = '0';
  }
}

/**
 * This listener is called on click of Roll Dice.
 */
document.querySelector('.btn-roll')
  .addEventListener('click', function() {
    let diceValue = Math.floor((Math.random() * 6) + 1);
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'images/dice-' + diceValue + '.png';
    if (diceValue > 1) {
      totalScore += diceValue;
      document.getElementById('currentScore-' + activePlayer)
        .textContent = totalScore
    } else {
      resetCurrentScore();
      // total score is reset so that the score starts from 0.
      totalScore = 0;
      switchPlayer();
    }
  });

/**
 * This function resets the current score of both the players to 0.
 */
function resetCurrentScore() {
  document.getElementById('currentScore-0')
    .textContent = 0;
  document.getElementById('currentScore-1')
    .textContent = 0;
}

/**
 * This function switches the player.
 */
function switchPlayer() {
  document.querySelector('.player-' + activePlayer + '-panel')
    .classList.remove('active');
  // active player is being switched
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  document.querySelector('.player-' + activePlayer + '-panel')
    .classList.add('active');
}