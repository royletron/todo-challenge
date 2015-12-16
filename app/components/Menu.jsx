var React = require('react');
var Store = require('../stores/TodoStore.jsx');
var Actions = require('../actions/TodoActions.jsx');
var Reflux = require('reflux');
var AddThing = require('./todo/AddThing.jsx');

var Item = React.createClass({
  onClick: function() {
    Actions.setList(this.props.item.id);
  },
  render: function() {
    return (
      <li className="nav-item"><a onClick={this.onClick} style={{"textAlign": "left"}}  className={this.props.active ? 'nav-link active': 'nav-link'}>{this.props.item.name} </a></li>
    );
  }
})

module.exports = React.createClass({
  mixins: [Reflux.connect(Store)],
  onAdd: function(name) {
    Actions.addList(name);
  },
  render: function() {
    var items = [];
    if(this.state.lists != undefined){
      items = this.state.lists.map(function(item){
        return <Item active={item.id === this.state.current} key={item.id} item={item} />;
      }.bind(this))
    }
    return (
      <div style={{'paddingTop': '15px'}}>
        <AddThing onAdd={this.onAdd} placeholder='Add list' button='Add' />
        <ul className="nav nav-pills nav-stacked" style={{"marginTop": "15px"}}>
          {items}
        </ul>
      </div>
    );
  }
})
