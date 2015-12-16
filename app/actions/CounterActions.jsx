var React = require('react');
var Reflux = require('reflux');

var Actions = Reflux.createActions(["increment", "decrement"]);

Actions.increment.listen(function(){
  console.log('Actions is getting an increment');
})

Actions.decrement.listen(function(){
  console.log('Actions is getting an decrement');
})

module.exports = Actions
