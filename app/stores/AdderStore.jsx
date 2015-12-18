var React = require('react');
var Reflux = require('reflux');
var StateMixin = require('reflux-state-mixin');
var Actions = require('../actions/AdderActions.jsx');

module.exports = Reflux.createStore({
	mixins: [StateMixin.store],
	listenables: Actions,
	contents: [],
	i: 0,
	getInitialState: function() {
		return this.contents;
	},
	removeTask: function(e) {
		// this.contents.splice(e.target.value, 1);
		this.contents[e.target.value] = null;
		this.trigger(this.contents);
		console.log(this.contents);
	},
	speak: function() {
		console.log('hello');
	},
	onAddTask: function(name, desc) {
		console.log(name);
		console.log(desc);
		this.contents[this.i] = (
			<div key={this.i}>
				<br/>
				<div onClick={this.speak} className="task" id={this.i}>
					<h1>{name}</h1>
					<h2>{desc}</h2>
					<button value={this.i} onClick={this.removeTask}>Done!</button>
					<br/>
					<br/>
				</div>
			</div>
		);
		this.i++;
		this.trigger(this.contents);
	}
})