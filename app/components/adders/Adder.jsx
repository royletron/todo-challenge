var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions/AdderActions.jsx');
var Store = require('../../stores/AdderStore.jsx');

module.exports = React.createClass({
	mixins: [Reflux.connect(Store, "")],
	getInitialState: function() {
		return {
		  taskName: '',
		  taskDescription: ''
		};
	},

	taskNameChange: function(s) {
		console.log('name change');
		this.setState({
			taskName: s.target.value
		});
	},

	taskDescChange: function(s) {
		console.log('description change');
		this.setState({
			taskDescription: s.target.value
		});
	},
	onAddTask: function() {
		console.log("The adder component is being made to add a task");
		Actions.addTask(
			this.state.taskName,
			this.state.taskDescription
		);
	},
	render: function() {
		return (
			<div>
				<form>
					<span>Task: </span>
					<input 
						type="text"
						ref="taskNameStringInput"
						name="taskName"
						onChange={this.taskNameChange} 
						value={this.props.taskName}/>
					<br/>
					<br/>
					<span>Description: </span>
					<input
						type="text"
						ref="taskDescStringInput" 
						name="taskDescription" 
						onChange={this.taskDescChange} 
						value={this.props.taskDescription}/>
					<br/>
				</form>
				<button onClick={this.onAddTask}>Add Task</button>
			</div>
		);
	}
})