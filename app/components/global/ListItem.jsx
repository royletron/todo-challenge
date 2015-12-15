var React = require('react');
var Actions = require('../../actions/Actions.jsx');

require('./ListItem.css');

var ListItem = module.exports = React.createClass({
  onClick: function(event){
    if(this.props.onClick)
      this.props.onClick(event);
    else
      console.log('You have not sent an onClick prop')
  },

  handleRemove: function() {
    console.log("handleRemove", this.props.taskIndex)
    Actions.removeTask(this.props.taskIndex);
  },

  //taskname: this.state.tasks[task].text,

  render: function(){
    return(
      <li onClick={this.onClick}>
        {this.props.taskIndex} : {this.props.taskText}
        <input type='button' value='-' class='delete' field='deleteTask' onClick={this.handleRemove}/>
      </li>
    );
  }
})
