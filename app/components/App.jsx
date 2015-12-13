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
    for (var task in this.state.tasks) {
      if (this.state.tasks[task] == null ) {
        console.log("Warning: null task")
        continue
      }

      var text = this.state.tasks[task].text;
      if (text != null)
        rows.push(<ListItem task={text}/>);
    }

    return (
      <div className="app-main">
        <h1>Djao's JustDoIt's</h1>
        <ul>
            {rows}
        </ul>
        <AddButton />
      </div>
    );
  }
});
