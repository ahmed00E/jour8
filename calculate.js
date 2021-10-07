function calculate(number1, number2, operator) {
  if (operator === "+") {
    console.log(number1 + number2)
  } else if (operator === "-") {
    console.log(number1 - number2)
  } else if (operator === "x") {
    console.log(number1 * number2)
  } else if (operator === "/") {
    console.log(number1 / number2)
  } else if (operator === "%") {
    console.log(number1 % number2)
  } else {
    console.log("Error")
  }
}

var parameters = process.argv.slice(2)
var parameter1 = parseInt(parameters[0])
var parameter2 = parseInt(parameters[1])
var parameter3 = parameters[2]

calculate(parameter1, parameter2, parameter3)
