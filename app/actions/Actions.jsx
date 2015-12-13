var React = require('react');
var Reflux = require('reflux');

var Actions = Reflux.createActions(["addTask", "deleteTask"]);

Actions.addTask.listen(function(){
  console.log('Adding task');
})

Actions.deleteTask.listen(function(){
  console.log('Deleting task');
})

module.exports = Actions
