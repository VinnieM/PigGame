'use Strict'

let scores;
let activePlayer = 0;
let totalScore = 0;

initialize();

/**
 * This function sets the values to the default state.
 */
function initialize() {
  document.querySelector('.dice')
    .style.display = 'none';
  for (var i = 0; i <= 1; i++) {
    document.querySelector('#totalScore-' + i)
      .textContent = '0';
    document.querySelector('#currentScore-' + i)
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
      document.querySelector('#currentScore-' + activePlayer)
        .textContent = totalScore
    }
  });