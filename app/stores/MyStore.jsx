var React = require('react');
var Reflux = require('reflux');
var StateMixin = require('reflux-state-mixin');
var Actions = require('../actions/MyActions.jsx');

module.exports = Reflux.createStore({
  mixins: [StateMixin.store],
  listenables: Actions,
  command: {
    current: [""],
    previous: []
  },
  tasks: [],
  getInitialState: function() {
    return this.command;
  },
  onNewCharacter: function(newCharacter) {
    this.command.current[0] += newCharacter;
    this.trigger(this.command);
  },
  onSubmit: function() {
    // I feel like this isn't the right place to be handling the commands
    // Haven't got the hang of which things go where in React/Reflux just yet!
    var c = this.command.current[0];
    if(c == "list") {
      for(var i = 0; i < this.tasks.length; i ++) {
        this.command.current.push("TASK: " + this.tasks[i]);
      }
      if(this.tasks.length == 0) this.command.current.push("NO TASKS ADDED YET");
    } else if(/^add .+/.test(c)) {
      var newTask = c.substr(4);
      this.tasks.push(newTask);
      this.command.current.push("NEW TASK ADDED: " + newTask);
    } else {
      this.command.current.push("ERROR: invalid command");
    }
    this.command.previous.push(this.command.current);
    this.command.current = [""];
    this.trigger(this.command);
  }
});
