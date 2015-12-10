var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions/TodoActions.jsx');
var Store = require('../../stores/TodoStore.jsx');

var CheckBox = React.createClass({
  onClick: function(event){
    Actions.toggleCheck(this.props.id);
  },
  render: function() {
    if(this.props.checked)
      return(
        <span onClick={this.onClick} style={{"fontSize": "50px", "color": "#2ECC40"}} className="glyphicon glyphicon-ok-sign" />
      )
    return(
      <span onClick={this.onClick} style={{"fontSize": "50px", "color": "#FF4136"}} className="glyphicon glyphicon-remove-sign" />
    )
  }
})

var Todo = React.createClass({
  onDeleteClick: function() {
    Actions.remove(this.props.data.id);
  },
  render: function() {
    var style = {};
    if(this.props.data.checked)
      style["textDecoration"] = "line-through";
    return (
      <li className="media well well-sm" key={this.props.data.id}>
        <div className="media-left">
          <CheckBox id={this.props.data.id} checked={this.props.data.checked} />
        </div>
        <div className="media-body">
          <h4 className="media-heading" style={style}>{this.props.data.todo}</h4>
          <a className="btn btn-sm btn-danger" onClick={this.onDeleteClick}>
            <span className="glyphicon glyphicon-trash"></span>
          </a>
        </div>
      </li>
    );
  }
})

module.exports = React.createClass({
  mixins: [Reflux.connect(Store,"todos")],
  render: function() {
    var list = [];

    this.state.todos.forEach(function(todo){
      list.push(<Todo key={todo.id} data={todo} />);
    })

    return (
      <ul className="media-list">
        {list}
      </ul>
    );
  }
})
