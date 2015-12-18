var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App.jsx');

window.onload = function() {
	ReactDOM.render(
	  <App/>,
	  document.getElementById('inner').appendChild(document.createElement('div'))
	);

}