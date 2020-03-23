/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
let startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', (e) => {
  game = new Game();
  game.startGame();
})