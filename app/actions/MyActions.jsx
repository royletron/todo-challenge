var React = require('react');
var Reflux = require('reflux');

var Actions = Reflux.createActions(["newCharacter", "submit"]);

Actions.newCharacter.listen(function(){

})

Actions.submit.listen(function(){
  
})

module.exports = Actions;
