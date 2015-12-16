var React = require('react');
var Store = require('../stores/TodoStore.jsx');
var Actions = require('../actions/TodoActions.jsx');
var Reflux = require('reflux');

var Item = React.createClass({
  render: function() {
    console.log(this.props);
    return (
      <li className={this.props.active ? 'active': ''}><a style={{"textAlign": "left"}}>{this.props.item.name}</a></li>
    );
  }
})

module.exports = React.createClass({
  mixins: [Reflux.connect(Store)],
  render: function() {
    var items = [];
    if(this.state.lists != undefined){
      items = this.state.lists.map(function(item){
        return <Item active={item.id === this.state.current} key={item.id} item={item} />;
      }.bind(this))
    }
    return (
      <ul className="nav nav-pills nav-justified" style={{"marginTop": "15px"}}>
        {items}
      </ul>
    );
  }
})
