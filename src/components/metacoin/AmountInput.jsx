import React from 'react';

var AmountInput = React.createClass({
  handleChange: function(event) {
    this.props.onChange(event.target.value);
  },
  render: function() {
    const value = this.props.value;
    
    return (
      <div className="col-sm-3">
        <input value={value} onChange={this.handleChange} />
      </div>
    );
  }
});

module.exports = AmountInput;
