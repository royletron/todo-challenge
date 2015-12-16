var React = require('react');
var Menu = require('../components/Menu.jsx');
var TodoList = require('../components/todo/TodoList.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="container-fluid" style={{"padding": "0px"}}>
        <div className="col-xs-3" style={{"backgroundColor" : "whitesmoke", "height": "100%"}}>
          <Menu />
        </div>
        <div className="col-xs-9">
          <TodoList />
        </div>
      </div>
    );
  }
})
