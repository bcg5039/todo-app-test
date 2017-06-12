const {get,set} = require('../lib/store.js')
const {map,filter} = require('ramda')
const ls = require('./ls.js')

module.exports = function(idIn){
  const list = get()
  const newListArray = filter(exclude(idIn),list.todos)
    list.counter--
  set({counter: list.counter, todos: newListArray})
  return ls()
}

const exclude = function(id){
  return function(todo){
    if(todo.id == id){
      return false
    }else{
      return true
    }
  }
}
