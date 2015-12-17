var React = require('react');
var Reflux = require('reflux');
var Adder = require('../adders/Adder.jsx');
var Store = require('../../stores/AdderStore.jsx');

module.exports = React.createClass({
	mixins: [Reflux.connect(Store, "contents")],
	render: function() {
		return (
			<div>
				<Adder/>
				<div>{this.state.contents}</div>
			</div>
		);
	}
});