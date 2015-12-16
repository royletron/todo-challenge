var React = require('react');
var Reflux = require('reflux');
var Input = require('./input/Input.jsx')
var InputButton = require('./input/InputButton.jsx')
var ToDoList = require('./ToDoList.jsx')

require('./App.css');

module.exports = React.createClass({
  render: function(){
    return (
      <div>
        <h1>TO DO</h1>
        <ToDoList />
        <Input />
      </div>
    );
  }
});
