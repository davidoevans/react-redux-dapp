import React from 'react';

var BoilingVerdict = React.createClass({
  render: function() {
    return (
      if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
      }
      return <p>The water would not boil.</p>;
    )
  }
});

module.exports = BoilingVerdict;
