var React = require('react');
var Reflux = require('reflux');

var Actions = Reflux.createActions(["add", "remove", "toggleCheck"]);

module.exports = Actions;
