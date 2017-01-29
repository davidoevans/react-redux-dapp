import React from 'react';

var AmountInput = React.createClass({
  getInitialState: function() {
    return {valid: true};
  },
  handleChange: function(e) {
    var numbers = /^[0-9]+$/;

    if (!e.target.value.match(numbers)) {
      this.setState({valid: false});
    } else {
      this.setState({valid: true});
    }
    this.props.onChange(e.target.value);
  },
  render: function() {
    var formClass = this.state.valid ? "form-group" : "form-group has-error";

    return (
      <div className={formClass}>
        <input className="form-control" value={this.props.value} onChange={this.handleChange} />
      </div>
    );
  }
});

module.exports = AmountInput;
