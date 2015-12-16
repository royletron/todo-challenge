var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions/TodoActions.jsx');
var Store = require('../../stores/TodoStore.jsx');
var AddThing = require('./AddThing.jsx');

var CheckBox = React.createClass({
  onClick: function(event){
    Actions.toggleCheck(this.props.id);
  },
  render: function() {
    if(this.props.checked)
      return(
        <i onClick={this.onClick} className="fa fa-check-circle" style={{"color": "#2ECC40"}}></i>
      )
    return(
      <i onClick={this.onClick} className="fa fa-circle" style={{"color": "#FF4136"}}></i>
    )
  }
})


/*
<li className="card" key={this.props.data.id}>
  <div className="media-left">
    <CheckBox id={this.props.data.id} checked={this.props.data.checked} />
  </div>
  <div className="media-body">
    <h4 className="media-heading" style={style}>{this.props.data.todo}</h4>
    <a className="btn btn-sm btn-danger" onClick={this.onDeleteClick}>
      <span className="glyphicon glyphicon-trash"></span>
    </a>
  </div>
</li> */

var Todo = React.createClass({
  onDeleteClick: function() {
    Actions.remove(this.props.data.id);
  },
  render: function() {
    var style = {};
    if(this.props.data.checked)
      style["textDecoration"] = "line-through";
    return (
      <div className="card card-block">
        <h4 className="card-title">
        <CheckBox id={this.props.data.id} checked={this.props.data.checked} /> {this.props.data.todo}</h4>
        <div className="btn-group btn-group">
          <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button>
          <button type="button" className="btn btn-primary"><i className="fa fa-pencil"></i></button>
        </div>
      </div>
    );
  }
})

module.exports = React.createClass({
  mixins: [Reflux.connect(Store)],
  onAdd: function(item) {
    Actions.add(item);
  },
  render: function() {
    var list = [];
    this.state.currentList.todos.forEach(function(todo){
      list.push(<Todo key={todo.id} data={todo} />);
    })

    return (
      <div>
        <h2>{this.state.currentList.name}</h2>
        <AddThing placeholder={"What do you want to add to "+this.state.currentList.name.toLowerCase()+"?"} onAdd={this.onAdd} button="Add it!" />
        {list}
      </div>
    );
  }
})
