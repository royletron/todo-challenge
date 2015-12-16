var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions/InputActions.jsx');

module.exports = Reflux.createStore({
  listenables: Actions,
  todos: [{text: 'walk the dog', ID: 0}],
  counter: 1,
  getInitialState: function() {
    return this.todos;
  },
  onAddItem: function(text){
    this.todos.push({text: text, ID: this.counter})
    this.counter++;
    this.trigger(this.todos);
  }
})
