import React from 'react';

var SendButton = React.createClass({
  render: function() {
    return (
      <div className="col-xs-3">
        <button className="btn btn-success btn-raised" onClick={this.props.onClick}>Send</button>
      </div>
    );
  }
});

module.exports = SendButton;
