var React = require('react');
var Reflux = require('reflux');
var StateMixin = require('reflux-state-mixin');
var Actions = require('../actions/TodoActions.jsx');

module.exports = Reflux.createStore({
  listenables: Actions,
  counter: 0,
  todos: [{id: -1, todo: "Get todos working", checked: true}],
  getInitialState: function() {
    return this.todos
  },
  onToggleCheck: function(id){
    this.todos.forEach(function(todo){
      if(todo.id == id)
        todo.checked = !todo.checked;
    });
    this.trigger(this.todos);
  },
  onAdd: function(todo){
    this.todos.push({id: this.counter, todo: todo, checked: false});
    this.counter++;
    this.trigger(this.todos);
  },
  onRemove: function(id){
    var tmp = []
    this.todos.forEach(function(todo){
      if(todo.id != id)
        tmp.push(todo);
    })
    this.todos = tmp;
    this.trigger(this.todos);
  }
})
