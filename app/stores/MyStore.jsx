var React = require('react');
var Reflux = require('reflux');
var StateMixin = require('reflux-state-mixin');
var Actions = require('../actions/MyActions.jsx');

module.exports = Reflux.createStore({
  mixins: [StateMixin.store],
  listenables: Actions
});
