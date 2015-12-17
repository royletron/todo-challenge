var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions/MyActions.jsx');
var Store = require('../stores/MyStore.jsx');

require('./App.css');

var ConsoleLine = React.createClass({
  render: function() {
    return (
      <div>{this.props.children}</div>
    );
  }
});

var Console = React.createClass({
  mixins: [Reflux.connect(Store, "command")],
  render: function() {
    return (
      <div>
        <ConsoleLine>*** PROCRASTI_MATE ***</ConsoleLine>
        <ConsoleLine>Console-based task management system</ConsoleLine>
        <ConsoleLine>{this.state.command}_</ConsoleLine>
      </div>
    );
  }
});

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Console />
      </div>
    );
  }
});

document.addEventListener("keypress", function(ev) {
  if(ev.which == 13) {
    Actions.submit();
  } else {
    var character = String.fromCharCode(ev.which);
    Actions.newCharacter(character);
  }
});
