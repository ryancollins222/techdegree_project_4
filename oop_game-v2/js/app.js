/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
let startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', (e) => {
  document.querySelector('ul').innerHTML = '';
  let keys = document.querySelectorAll('.key');
  keys.forEach(key => {
    key.className = 'key';
    key.disabled = false;
  })
  let hearts = document.querySelectorAll('.tries img');
  hearts.forEach(heart => heart.src = 'images/liveHeart.png');
  game = new Game();
  game.startGame();
})

let letterDiv = document.querySelector('#qwerty');
letterDiv.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    game.handleInteraction(e.target);
  }
})