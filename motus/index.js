// import beeper from 'beeper'
var prompt = require("prompt")
var colors = require('colors')
var beep = require("beepbeep")

var getWord = require("./getWord")

var mysteryWord = getWord(5)
// var mysteryWord = "mules"
var attempts = 5

prompt.start()

function play() {
  prompt.get({ name: "input", description: `Trouver le mot mystère qui commence par ${mysteryWord[0].red}` }, function(err, result) {
    if (attempts === 0) {
      console.log("T'es nul")
    }

    if (result.input === mysteryWord) {
      console.log("Bravo")
      beep(3, 500)
    }

    var str = ""

    if (result.input.length !== 5) {
      console.log("Pas le bon nombre de lettres")
      play()
    } else {
      for (var i = 0; i < mysteryWord.length; i++) {
        var letter = result.input[i]

        if (mysteryWord[i] === letter) {
          str = str + letter.red
        } else if (mysteryWord.includes(letter)) {
          str = str + letter.yellow
        } else {
          str = str + letter
        }
      }

      play()
    }

    attempts = attempts - 1

    console.log(str)
  })
}

play()