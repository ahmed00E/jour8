var prompt = require("prompt")

prompt.start()

var min = 1
var max = 100
var mysteryNum = Math.floor(Math.random() * (max - min + 1) + min)

function play() {
  prompt.get({ name: "play", description: "Quel est le nombre mystere" }, function(err, res) {
    var myNumber = parseInt(res.play)

    if (typeof myNumber !== "number") {
      console.log("Error")
      play()
    } else if (myNumber < mysteryNum) {
      console.log("C'est plus")
      play()
    } else if (myNumber > mysteryNum) {
      console.log("C'est moins")
      play()
    } else if (myNumber === mysteryNum) {
      console.log("Bravo")
    }
  })
}

play()
