var React = require('react');
var Reflux = require('reflux');
var ListItem = require('./global/ListItem.jsx');
var AddButton = require('./global/AddButton.jsx');
var Store = require('../stores/TaskStore.jsx');

require('./App.css');

module.exports = React.createClass({
  mixins: [Reflux.connect(Store, "tasks")],

  render: function() {

    console.log(this.state.tasks);

    var rows = [];
    var count = 0;
    for (var task in this.state.tasks) {
      if (this.state.tasks[task] == null ) {
        console.log("Warning: null task")
        continue
      }

      //var text = this.state.tasks[task].text;
      //if (text != null)
      rows.push(<ListItem key={count} taskIndex={task} taskText={this.state.tasks[task].text}/>);
      count++;
    }

    return (
      <div className="app-main">
        <h1>Djao's JustDoIt's</h1>
        <AddButton />
        <ul className="task-list">
            {rows}
        </ul>
      </div>
    );
  }
});
