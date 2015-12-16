var React = require('react');

module.exports = React.createClass({
  onSubmit: function(event) {
    event.preventDefault();
    this.props.onAdd(this.refs.input.value)
  },
  render: function() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="input-group">
          <input ref="input" type="text" className="form-control" placeholder={this.props.placeholder} />
          <span className="input-group-btn">
            <input className="btn btn-default" type="submit" value={this.props.button} />
          </span>
        </div>
      </form>
    );
  }
})
