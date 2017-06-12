const {get,set} = require('../lib/store.js')
const {map} = require('ramda')
const ls = require('./ls.js')


module.exports = function (itemToAdd){
  const list = get()
  set(list, list.todos.push(addItem(itemToAdd,list)))
  return ls()
}

function addItem(itemTxt,list){
  list.counter++
  let obj = {
    text: itemTxt.join(" "),
    id: list.counter,
    completed: false
  }
  return obj
}
