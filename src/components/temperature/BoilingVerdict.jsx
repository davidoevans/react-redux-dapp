import React from 'react';

var BoilingVerdict = React.createClass({
  render: function() {
    var verdict = this.props.celsius >= 100 ? <p>The water would boil.</p> : <p>The water would not boil.</p>;

    return (
      <div>
        <fieldset>
          {verdict}
        </fieldset>
      </div>
    );
  }
});

module.exports = BoilingVerdict;
