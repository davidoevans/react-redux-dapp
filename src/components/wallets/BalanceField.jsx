import React from 'react';

var BalanceField = React.createClass({
  getInitialState: function() {
    return {balance: ""};
  },
  render: function() {
    return (
      <div className="form-group">
        <input className="form-control" type="text" readOnly>{this.state.balance}</input>
      </div>
    );
  }
});

module.exports = BalanceField;
