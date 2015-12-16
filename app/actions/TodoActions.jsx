var React = require('react');
var Reflux = require('reflux');

var Actions = Reflux.createActions(["add", "remove", "toggleCheck", "setList", "addList"]);

module.exports = Actions;
