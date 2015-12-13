var React = require('react');
var Actions = require('../../actions/Actions.jsx');

//require('./AddButton.css');

var AddButton = module.exports = React.createClass({
  onClick: function(event){
    if(this.props.onClick)
      this.props.onClick(event);
    else
      console.log('You have not sent an onClick prop')
  },

  _handleChange: function(event){
    this.value = event.target.value;
  },

  _handleKeyPress: function(event) {
    if (event.key === 'Enter') {
      console.log('do validate');
      Actions.addTask(event.target.value);
      event.target.value = "";
      //this.replaceState(this.getInitialState());
    }
  },

  componentDidMount: function(event) {
    // autofocus didn't work on the render function. why?
    this.refs.addtask.focus();
  },

  value: "write your task here",

  render: function () {
    console.log("input component value", this.value);

    return <input ref="addtask" type="text" onKeyPress={this._handleKeyPress} onChange={this._handleChange}/>;
  }
});
