var React = require('react');
var Reflux = require('reflux');
var StateMixin = require('reflux-state-mixin');
var Actions = require('../actions/MyActions.jsx');

module.exports = Reflux.createStore({
  mixins: [StateMixin.store],
  listenables: Actions,
  command: "",
  getInitialState: function() {
    return this.command;
  },
  onNewCharacter: function(newCharacter) {
    this.command += newCharacter;
    this.trigger(this.command);
  },
  onSubmit: function() {
    this.command = "";
    this.trigger(this.command);
  }
});
