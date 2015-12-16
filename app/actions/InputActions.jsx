var React = require('react');
var Reflux = require('reflux');

var Actions = Reflux.createActions(["addItem", "removeItem"]);

Actions.addItem.listen(function(){
  console.log('Actions is adding an item');
})
Actions.removeItem.listen(function(){
  console.log('Actions is removing an item');
})

module.exports = Actions
