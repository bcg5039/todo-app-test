const {get,set} = require('../lib/store.js')
const ls = require('./ls.js')
const {map} = require('ramda')

module.exports = function(id){

  // ['3']    // 1 == '1' true
  const todoId = parseInt(id[0], 10)
  // todoId = 3

  const list = get()
  const newTodos = map(function (todo) {
    if (todo.id === todoId) {
      todo.completed = !todo.completed
    }
    return todo
  }, list.todos)
  set({counter: list.counter, todos: newTodos})
  return ls();
}

  //const newTodos = map(ifIdMatchesTodoIdThenMarkComplete, list)



function ifIdMatchesTodoIdThenMarkComplete (id) {
  return function (todo) {
    if (todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo
  }
}
