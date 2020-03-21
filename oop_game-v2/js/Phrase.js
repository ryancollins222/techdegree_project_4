/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  addPhraseToDisplay() {
    let ul = document.querySelector('#phrase ul');
    for (let i = 0; i< this.phrase.length; i++) {
      let li = document.createElement('li');
      if (this.phrase[i] === ' ') {
        li.classList.add('space');
        ul.appendChild(li);
      } else {
        li.classList.add('hide');
        li.classList.add('letter');
        li.classList.add(`${this.phrase[i]}`);
        li.innerText = `${this.phrase[i]}`;
        ul.appendChild(li);
      }
    }
  }
}
let x = new Phrase('JIMMiny jamminy');
console.log(x);