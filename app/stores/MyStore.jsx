var React = require('react');
var Reflux = require('reflux');
var StateMixin = require('reflux-state-mixin');
var Actions = require('../actions/MyActions.jsx');

module.exports = Reflux.createStore({
  mixins: [StateMixin.store],
  listenables: Actions,
  command: {
    current: "",
    previous: []
  },
  getInitialState: function() {
    return this.command;
  },
  onNewCharacter: function(newCharacter) {
    this.command.current += newCharacter;
    this.trigger(this.command);
  },
  onSubmit: function() {
    this.command.previous.push(this.command.current);
    console.log(this.command.previous);
    this.command.current = "";
    this.trigger(this.command);
  }
});
