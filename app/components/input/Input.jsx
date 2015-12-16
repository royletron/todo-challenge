var React = require('react');
var Actions = require('../../actions/InputActions.jsx')
require('./Input.css');

var Input = module.exports = React.createClass({
  onSubmit: function(event) {
    event.preventDefault();
    Actions.addItem(this.refs.todoInput.value);
  },
  render: function() {
    return (
      <div className="input-main">
        <h3>Item #</h3>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="to do..." ref="todoInput"/>
          <input type="submit" label="add" />
        </form>
      </div>
    );
  }
});
