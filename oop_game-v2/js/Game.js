/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase('Barking Up The Wrong Tree'), 
      new Phrase('Close But No Cigar'), 
      new Phrase('Actions Speak Louder Than Words'),
      new Phrase('Curiosity Killed The Cat'),
      new Phrase('Finger Lickin Good')
    ];  
    this.activePhrase = null;
  }

  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

  handleInteraction(button) {
    button.disabled = true;
    if (!this.activePhrase.checkLetter(button.innerText)) {
      button.classList.add('wrong');
      game.removeLife();
    } else {
      button.classList.add('chosen');
      this.activePhrase.showMatchedLetter(button.innerText);
      if (this.checkForWin()) {
        this.gameOver();
      }
    }
  }

  startGame() {
    document.querySelector('#overlay').style.display = 'none'; 
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  checkForWin() {
   if (document.querySelectorAll('.hide').length === 0) {
     this.gameOver();
   }
  }

  removeLife() {
    this.missed += 1;
    let hearts = document.querySelectorAll('.tries img');
    for (let i = 0; i < hearts.length; i++) {
      if (hearts[i].getAttribute('src') === 'images/liveHeart.png' ) {
        hearts[i].src = 'images/lostHeart.png';
        break;
      } 
    }
    if (this.missed === 5) {
      this.gameOver();
    }
  }

  gameOver() {
    let div = document.querySelector('#overlay');
    let h1 = div.querySelector('h1');
    div.style.display = '';
    if (this.missed < 5) {
      div.className = 'win';
      h1.innerText = 'You chose wisely!'
    } else {
      div.className = 'lose';
      h1.innerText = 'You lost! Better luck next time!';
    }

  }
}