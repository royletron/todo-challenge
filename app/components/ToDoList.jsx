var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions/InputActions.jsx');
var Store = require('../stores/InputStore.jsx');

module.exports = React.createClass({
  mixins: [Reflux.connect(Store, "todos")],

  render: function() {
    var List = []
    for (var i=0; i<this.state.todos.length; i++) {
      List.push(<li key={this.state.todos[i].ID}>{this.state.todos[i].text}</li>)
    }
    return (
      <ul>
        {List}
      </ul>
    );
  }
})
