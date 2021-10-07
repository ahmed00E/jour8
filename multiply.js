function multiply(number) {
  for(var i = 1; i <= 10; i++) {
    var result = number * i
    console.log(`${number} x ${i} = ${result}`)
  }
}

var parameters = process.argv.slice(2)
var parameter = parseInt(parameters[0])

// if (parameters.length === 0) {
//   console.log("Error")
// } else {
//   multiply(parameter)
// }