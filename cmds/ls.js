const {get,set} = require('../lib/store.js')
const {map} = require('ramda')
module.exports = function (){
  const list = get()

  console.log("\n------------------")
  console.log("         TODO'S")
  map(printObj,list.todos)
  console.log("------------------")
  return console.log(`Total: ${list.counter} remaining.`)
}

function printObj(obj){
  console.log(`${obj.id} - ${obj.completed ? "[X]" : "[ ]"} ${obj.text}`)
  return obj
}
