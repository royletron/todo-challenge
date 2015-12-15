var React = require('react');
var Reflux = require('reflux');
var Actions = Reflux.createActions(["addTask", "removeTask"]);

Actions.addTask.listen(function(){
  console.log('Adding task');
})

Actions.removeTask.listen(function(){
  console.log('Deleting task');
})

module.exports = Actions
