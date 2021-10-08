var randomWordFR = require('random-word-fr');

function getWord(numberOfLetters) {
  var has5Letters = false
  var word = ""

  while (!has5Letters) {
    word = randomWordFR()
    has5Letters = word.length === numberOfLetters
  }

  word = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  return word
}

module.exports = getWord