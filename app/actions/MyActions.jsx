var React = require('react');
var Reflux = require('reflux');

var Actions = Reflux.createActions(["newCharacter", "submit", "list"]);

Actions.newCharacter.listen(function(){

})

Actions.submit.listen(function(){

})

Actions.list.listen(function(){
  console.log("LIST");
})

module.exports = Actions;
