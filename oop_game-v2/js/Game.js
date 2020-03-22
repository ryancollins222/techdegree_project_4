/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      'Barking Up The Wrong Tree', 
      'Close But No Cigar', 
      'Actions Speak Louder Than Words',
      'Curiosity Killed The Cat',
      'Finger Lickin’ Good'];
    this.activePhrase = null;
  }
  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }
}