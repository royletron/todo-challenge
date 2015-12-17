var React = require('react');
var Reflux = require('reflux');

var Actions = Reflux.createActions(["addTask"]);

Actions.addTask.listen(function(){
  console.log('Actions: addTask');
});

module.exports = Actions;