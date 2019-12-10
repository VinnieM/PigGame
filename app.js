"use strict"

let activePlayer = 0,
  totalScore = 0,
  clickOnce = true;

initialize();

/**
 * This function resets all the values.
 */
function initialize() {
  totalScore = 0;
  activePlayer = 0;
  clickOnce = true;
  document.querySelector('.dice')
    .style.display = 'none';
  for (var i = 0; i <= 1; i++) {
    document.getElementById('totalScore-' + i)
      .textContent = '0';
    document.getElementById('currentScore-' + i)
      .textContent = '0';
  }
  document.querySelector('.player-0-panel')
    .classList.add('active');
  document.querySelector('.player-1-panel')
    .classList.remove('active');
  document.querySelector('.player-1-panel')
    .classList.remove('winner');
  document.querySelector('.player-1-panel')
    .classList.remove('winner');
  document.getElementById('name-0')
    .textContent = 'Player 1';
  document.getElementById('name-1')
    .textContent = 'Player 2';
}

/**
 * This function starts a new game.
 */
document.querySelector('.btn-new')
  .addEventListener('click', function() {
    initialize();
    // alert('New Game has started!');
  });

/**
 * This listener is called on click of Roll Dice.
 */
document.querySelector('.btn-roll')
  .addEventListener('click', function() {
    // Before rolling, the status of the game is checked.
    if (checkGameStatus()) {
      alert('Please start a new game!!!');
    } else {
      // A random number beteen 1 and 6 is generated.
      let diceValue = Math.floor((Math.random() * 6) + 1);
      let diceDOM = document.querySelector('.dice');
      diceDOM.style.display = 'block';
      diceDOM.src = 'images/dice-' + diceValue + '.png';
      if (diceValue > 1) {
        totalScore += diceValue;
        document.getElementById('currentScore-' + activePlayer)
          .textContent = totalScore
      } else {
        document.querySelector('.dice')
          .style.display = 'none';
        resetCurrentScore();
        // total score is reset so that the score starts from 0.
        totalScore = 0;
        switchPlayer();
      }
      // This boolean makes sure that hold button can only be
      // pressed after the dice is rolled.
      clickOnce = true;
    }
  });

/**
 * This listener is called when the hold button is pressed.
 */
document.querySelector('.btn-hold')
  .addEventListener('click', function() {
    if (clickOnce) {
      let currentPlayerDOM = document.querySelector('#totalScore-' + activePlayer)
      totalScore += parseInt(currentPlayerDOM.textContent);
      currentPlayerDOM.textContent = totalScore;
      // if the game is not over a player switch happens
      if (!checkGameStatus()) {
        totalScore = 0;
        document.querySelector('.dice')
          .style.display = 'none';
        switchPlayer();
        resetCurrentScore();
      }
    }
    clickOnce = false;
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
    .classList.toggle('active');
  // active player is being switched
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  document.querySelector('.player-' + activePlayer + '-panel')
    .classList.toggle('active');
}

/**
 * This fucntion returns a boolean value if a new game has started.
 * @return {Boolean} true is returned if game has been completed, else false.
 */
function checkGameStatus() {
  if (totalScore >= 50) {
    document.querySelector('.player-' + activePlayer + '-panel')
      .classList.remove('active');
    document.querySelector('.player-' + activePlayer + '-panel')
      .classList.add('winner');
    document.getElementById('name-' + activePlayer)
      .textContent = 'Winner!';
    return true;
  } else {
    return false;
  }
}