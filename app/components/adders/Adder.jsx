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
		Actions.taskNameChange();
	},

	taskDescChange: function(s) {
		console.log('description change');
		this.setState({
			taskDescription: s.target.value
		});
		Actions.taskDescChange();
	},
	onAddTask: function(evt) {
		evt.preventDefault();
		console.log("The adder component is being made to add a task");
		Actions.addTask(
			this.state.taskName,
			this.state.taskDescription
		);
		return false;
	},
	render: function() {
		return (
			<div className="inner cover">
				<div className="taskAdder">
					<form onSubmit={this.onAddTask}>
						<input
							className="taskAdderInputLarge"
							type="text"
							ref="taskNameStringInput"
							name="taskName"
							placeholder="Add a new task..."
							onChange={this.taskNameChange} 
							value={this.state.taskName}/>
						<br/>
						<br/>
						<br/>
						<input
							className="taskAdderInputSmall"
							type="text" 
							ref="taskDescStringInput" 
							name="taskDescription"
							placeholder="Enter description here"
							onChange={this.taskDescChange}
							value={this.state.taskDescription}/>
						<br/>
						<input className="hiddenSubmit" type="submit" value="Send"/>
					</form>
				</div>
			</div>
		);
	}
})