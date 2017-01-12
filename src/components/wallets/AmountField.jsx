import React from 'react';

var AmountField = React.createClass({
  getInitialState: function() {
    return {valid: true, amount: ""}
  },
  handleChange: function(e) {
    var numbers = /^[0-9]+$/;

    if (!e.target.value.match(numbers)) {
      this.setState({valid: false, amount: e.target.value});
    } else {
      this.setState({valid: true, amount: e.target.value});
    }
  },
  render: function() {
    var formClass = this.state.valid ? "form-group" : "form-group has-error";

    return (
        <div className={formClass}>
          <input className="form-control" onChange={this.handleChange} placeholder="1 ether" value={this.state.value}/>
        </div>
    );
  }
});

module.exports = AmountField;
