var React = require('react');

require('./App.css');

var List = module.exports = React.createClass ({
  render: function() {
    return (
      <div className="listbg">
        <ListTitle></ListTitle>
        <div className="listarea">
          <ToDoItem></ToDoItem>
        </div>
        <div className="buttonarea">
          <NewItemButton>new</NewItemButton>
        </div>
      </div>
    );
  }
})

var ListTitle = module.exports = React.createClass ({
  render: function() {
    return(
      <p className="listtitle">ListTitle</p>
    );
  }
})

var ToDoItem = module.exports = React.createClass ({
  getInitialState: function(){
    return {editing: false}
  },

  onEditClick: function() {
    this.setState({editing: true})
  },

  render: function() {
    var text = <div>your mom</div>
    if (this.state.editing) {
      text = <input ref="enteredtodotext" type="input" className="inputtext"></input>
    }
    return(
      <div>
        <input className="checkbox" type="checkbox"></input>
        {text}
          <button onClick={this.onEditClick} style={{"display": this.state.editing ? "none" : ""}} type="button" className="btn-primary btn-success-outline">edit</button>
          <button type="button" className="btn-primary btn-success-outline">save</button>
      </div>
    );
  }
})


var TickBox = module.exports = React.createClass({
  render: function() {
    return(
      <input className="checkbox" type="checkbox"></input>
    );
  }
})

var ToDoText = module.exports = React.createClass({
  render: function() {
    return(
      <input ref="enteredtodotext" type="input" className="inputtext"></input>
    );
  }
})

var NewItemButton = module.exports = React.createClass ({
  render: function() {
    return(
      <button type="button" className="btn-primary btn-success-outline">{this.props.children}</button>
    );
  }
})

var EditItemButton = module.exports = React.createClass ({
  edit: function () {
    this.setState({editing: true})
    console.log('edit');
  },

  render: function() {
    return(
      <button onClick={this.edit} type="button" className="btn-primary btn-success-outline">{this.props.children}</button>
    );
  }
})

var SaveItemButton = module.exports = React.createClass ({
  save: function () {
    this.setState({editing: false})
    console.log(this.refs.enteredtodotext.value);
  },

  render: function() {
    return(
      <button onClick={this.save} type="button" className="btn-primary btn-success-outline">{this.props.children}</button>
    );
  }
})

module.exports = React.createClass({
  render: function() {
    return (
      <List />
    );
  }
});
