var React = require('react');
var Reflux = require('reflux');
var StateMixin = require('reflux-state-mixin');
var Actions = require('../actions/TodoActions.jsx');

var data = {
  lists: [{ id: 0, name: "Test List", counter: 0, todos: [{id: -1, todo: "Get todos working", checked: true}]},{ id: 1, name: "Test List 2", counter: 0, todos: [{id: -1, todo: "Adding more todos", checked: false}]}],
  current: 0,
  counter: 2,
};

data.currentList = data.lists[data.current];

module.exports = Reflux.createStore({
  listenables: Actions,
  getInitialState: function() {
    return data;
  },
  onToggleCheck: function(id){
    data.currentList.todos.forEach(function(todo){
      if(todo.id == id)
        todo.checked = !todo.checked;
    });
    this.trigger(data);
  },
  onAddList: function(name) {
    data.lists.push({id: data.counter, name: name, counter: 0, todos: []});
    data.counter++;
    console.log(data);
    this.trigger(data);
  },
  onAdd: function(todo){
    data.currentList.todos.push({id: data.currentList.counter, todo: todo, checked: false});
    data.currentList.counter++;
    this.trigger(data);
  },
  onRemove: function(id){
    var tmp = []
    data.currentList.todos.forEach(function(todo){
      if(todo.id != id)
        tmp.push(todo);
    })
    data.currentList.todos = tmp;
    this.trigger(data);
  },
  onSetList: function(id){
    data.current = id;
    data.currentList = data.lists[id];
    this.trigger(data);
  }
});
