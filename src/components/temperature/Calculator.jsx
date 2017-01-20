import React from 'react';
import TemperatureInput from './TemperatureInput';

var Calculator = React.createClass({
  render() {
    return (
      <TemperatureInput scale="c" />
      <TemperatureInput scale="f" />
    );
  }
});

module.exports = Calculator;
