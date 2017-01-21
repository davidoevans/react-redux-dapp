import React from 'react';

var SendMetaButton = React.createClass({
  handleClick: function(e) {
    this.props.onSend(e.target.value);
  },
  render: function() {
    return (
      <div className="col-xs-3">
        <button className="btn btn-success btn-raised" onClick={this.handleClick}>Send</button>
      </div>
    );
  }
});

module.exports = SendMetaButton;
