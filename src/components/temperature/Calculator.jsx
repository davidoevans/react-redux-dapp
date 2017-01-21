import React from 'react';
import TemperatureInput from './TemperatureInput.jsx';
import BoilingVerdict from './BoilingVerdict.jsx';

var toCelsius = function(fahrenheit) {
  return (fahrenheit - 32) * 5 /9;
}

var toFahrendheit = function(celsius) {
  return (celsius * 9 / 5) + 32;
}

var tryConvert = function(value, convert) {
  const input = parseFloat(value);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

var Calculator = React.createClass({
  getInitialState: function() {
    return {value: '', scale: 'c'};
  },
  handleCelsiusChange: function(value) {
    this.setState({scale: 'c', value});
  },
  handleFahrenheitChange: function(value) {
    this.setState({scale: 'f', value});
  },
  render() {
    const scale = this.state.scale;
    const value = this.state.value;
    const celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
    const fahrenheit = scale === 'c' ? tryConvert(value, toFahrendheit) : value;
    return (
      <div>
        <TemperatureInput scale="c" value={celsius} onChange={this.handleCelsiusChange} />
        <TemperatureInput scale="f" value={fahrenheit} onChange={this.handleFahrenheitChange} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
});

module.exports = Calculator;
