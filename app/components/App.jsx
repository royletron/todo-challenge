var React = require('react');

require('./App.css');

var ConsoleLine = React.createClass({

  render: function() {
    return (
      <div>{this.props.children}</div>
    );
  }
});

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <ConsoleLine>*** PROCRASTI_MATE ***</ConsoleLine>
        <ConsoleLine>Console-based task management system</ConsoleLine>
      </div>
    );
  }
});
