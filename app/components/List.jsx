var ToDoItem = module.exports = React.createClass ({
  render: function() {
    return(
      <TickBox ></TickBox>
      <ToDoText></ToDoText>
    );
  }

})

var TickBox = module.exports = React.createClass({
  render: function() {
    return(
      <input type="checkbox"></input>
    );
  }
})

var ToDoText = module.exports = React.createClass({
  render: function() {
    return(
      <input type="input"></input>
    );
  }
})
