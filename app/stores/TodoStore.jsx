var React = require('react');
var Reflux = require('reflux');
var StateMixin = require('reflux-state-mixin');
var Actions = require('../actions/TodoActions.jsx');

var data = {
  lists: [{ id: 0, name: "Test List", counter: 0, todos: [{id: -1, todo: "Get todos working", checked: true}]}],
  current: 0,
  counter: 1,
  currentList: function() {
    return this.lists.find(function(list){
      return list.id === data.current;
    });
  }
};

module.exports = Reflux.createStore({
  listenables: Actions,
  getInitialState: function() {
    return data;
  },
  onToggleCheck: function(id){
    data.currentList().todos.forEach(function(todo){
      if(todo.id == id)
        todo.checked = !todo.checked;
    });
    this.trigger(data);
  },
  onAdd: function(todo){
    data.currentList().todos.push({id: this.counter, todo: todo, checked: false});
    this.counter++;
    this.trigger(data);
  },
  onRemove: function(id){
    var tmp = []
    data.currentList().todos.forEach(function(todo){
      if(todo.id != id)
        tmp.push(todo);
    })
    data.currentList().todos = tmp;
    this.trigger(data);
  }
});
