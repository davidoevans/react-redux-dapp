import React from 'react';
import Reflux from 'reflux';
import AccountStore from '../reflux/AccountStore.jsx';

var BalanceField = React.createClass({
  mixins: [Reflux.listenTo(AccountStore, 'onChange')],
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
