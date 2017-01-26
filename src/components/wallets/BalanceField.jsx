import React from 'react';
import Reflux from 'reflux';
import AccountStore from '../reflux/AccountStore.jsx';

var BalanceField = React.createClass({
  render: function() {
    return (
      <div className="form-group">
        <input className="form-control" type="text" readOnly>{this.props.balance}</input>
      </div>
    );
  }
});

module.exports = BalanceField;
