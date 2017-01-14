import React from 'react';
import Actions from '../reflux/actions.jsx';
import Reflux from 'reflux';
import AccountStore from '../reflux/AccountStore.jsx';

var AccountDropdown = React.createClass({
  mixins: [Reflux.listenTo(AccountStore, 'onChange')],
  getInitialState: function() {
    return {accounts: []};
  },
  componentWillMount: function() {
    Actions.getAccounts();
  },
  onChange: function(event, accounts) {
    this.setState({accounts: accounts});
  },
  render: function() {
    var accounts = this.state.accounts.map(function(account) {
      return <option>{account}</option>
    });

    return (
      <div className="form-group">
        <select className="form-control">
          {accounts}
        </select>
      </div>
    )
  }
});

module.exports = AccountDropdown;
