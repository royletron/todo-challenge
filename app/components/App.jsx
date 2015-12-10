var React = require('react');
var TodoList = require('./todo/TodoList.jsx');
var Actions = require('../actions/TodoActions.jsx');
require('./App.css');


module.exports = React.createClass({
  onSubmit: function(event) {
    event.preventDefault();
    Actions.add(this.refs.textToAdd.value)
  },
  render: function() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Darren's Todoist</h1>
        </div>
        <TodoList />
        <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <input ref="textToAdd" type="text" className="form-control" />
            <span className="input-group-btn">
              <input className="btn btn-default" type="submit" value="Add" />
            </span>
          </div>
        </form>
      </div>
    );
  }
});
