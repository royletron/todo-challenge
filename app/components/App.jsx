var React = require('react');
var Reflux = require('reflux');
var Viewer = require('./viewers/Viewer.jsx');
var Store = require('../stores/AdderStore.jsx');

require('./App.css');

module.exports = React.createClass({
	mixins: [Reflux.connect(Store, "contents")],
	render: function() {
		return (
			<div>
		  		<Viewer />
		  	</div>
		);
	}
});