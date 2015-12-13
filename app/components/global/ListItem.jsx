var React = require('react');

require('./ListItem.css');

var ListItem = module.exports = React.createClass({
  onClick: function(event){
    if(this.props.onClick)
      this.props.onClick(event);
    else
      console.log('You have not sent an onClick prop')
  },
  render: function(){
    return(
      <li onClick={this.onClick}>
        <p>{this.props.task}</p>
      </li>
    );
  }
})
