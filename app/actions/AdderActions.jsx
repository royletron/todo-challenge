var React = require('react');
var Reflux = require('reflux');

var Actions = Reflux.createActions(["addTask", "taskNameChange", "taskDescChange"]);

Actions.addTask.listen(function(){
  console.log('Actions: addTask');
});

Actions.taskNameChange.listen(function(){
  console.log('Actions: taskNameChange');
});

Actions.taskDescChange.listen(function(){
  console.log('Actions: taskDescChange');
});

module.exports = Actions;