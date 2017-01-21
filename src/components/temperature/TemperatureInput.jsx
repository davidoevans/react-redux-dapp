import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

var TemperatureInput = React.createClass({
  handleChange: function(event) {
    this.props.onChange(event.target.value);
  },
  render: function() {
    const value = this.props.value;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={value} onChange={this.handleChange} />
      </fieldset>
    );
  }
});

module.exports = TemperatureInput;
