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
  mixins: [
    Reflux.connect(Store, "command")
  ],
  render: function() {
    var previousLines = [];
    console.log(this.state);
    var k = 0;
    for(var i = 0; i < this.state.command.previous.length; i ++) {
      for(var j = 0; j < this.state.command.previous[i].length; j ++) {
        previousLines.push(<ConsoleLine key={k}>{this.state.command.previous[i][j]}</ConsoleLine>);
        k ++;
      }
    }
    return (
      <div>
        <ConsoleLine>*** PROCRASTI_MATE ***</ConsoleLine>
        <ConsoleLine>Console-based task management system</ConsoleLine>
        <ConsoleLine>Use "list" to see current tasks</ConsoleLine>
        <ConsoleLine>Use "add [task description]" to add a new task</ConsoleLine>
        <ConsoleLine><br/></ConsoleLine>
        {previousLines}
        <ConsoleLine>{this.state.command.current}_</ConsoleLine>
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

var actx = new (window.AudioContext || window.webkitAudioContext)();
var gain = actx.createGain();
gain.gain.value = 0.1;
gain.connect(actx.destination);

document.addEventListener("keypress", function(ev) {
  var osc = actx.createOscillator();
  osc.type = 'square';
  osc.connect(gain);
  if(ev.which == 13) {
    osc.frequency.value = 440;
    osc.start();
    osc.stop(actx.currentTime + 0.3);
    Actions.submit();
  } else {
    osc.frequency.value = 330;
    osc.start();
    osc.stop(actx.currentTime + 0.05);
    var character = String.fromCharCode(ev.which);
    Actions.newCharacter(character);
  }
});
