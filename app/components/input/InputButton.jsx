var React = require('react');

require('./Input.css');

var Input = module.exports = React.createClass({
  render: function(){
    return(
      <a onClick={this.onClick} className="input-button-main">
        {this.props.label}
      </a>
    );
  }
})
