var React = require('react');
var Reflux = require('reflux');

var Actions = Reflux.createActions(["test"]);

Actions.test.listen(function(){
  console.log('Something has worked!');
})

module.exports = Actions;
