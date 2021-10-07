function multiply(number) {
  for(var i = 1; i <= 10; i++) {
    var result = number * i
    console.log(`${number} x ${i} = ${result}`)
  }
}

function addition(number) {
  for(var i = 1; i <= 10; i++) {
    var result = number + i
    console.log(`${number} + ${i} = ${result}`)
  }
}

module.exports = {
  multiply,
  addition
}