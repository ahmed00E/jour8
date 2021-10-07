var tableUtils = require("./table-utils")
console.log(tableUtils)

var parameters = process.argv.slice(2)
var parameter1 = parseInt(parameters[0])
var parameter2 = parseInt(parameters[1])

tableUtils.multiply(parameter1)
console.log("")
tableUtils.addition(parameter2)
