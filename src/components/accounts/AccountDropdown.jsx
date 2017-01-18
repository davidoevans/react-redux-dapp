import React from 'react';
import Reflux from 'reflux';
import Actions from '../reflux/actions.jsx';
import AccountStore from '../reflux/AccountStore.jsx';

var AccountDropdown = React.createClass({
  mixins: [Reflux.listenTo(AccountStore, 'onChange')],
  getInitialState: function() {
    return {from: "", accounts: []};
  },
  componentWillMount: function() {
    Actions.getAccounts();
  },
  onChange: function(event, _accounts) {
    console.log('Changed to: ' + _accounts);
    this.setState({from: _accounts[0].address, accounts: _accounts});
  },
  handleSelect: function(event, _account) {
    console.log('Selected ' + event.target.value);
    this.setState({from: event.target.value});
  },
  render: function() {
    var accounts = this.state.accounts.map(function(account) {
      return <option key={account.address}>{account.address}</option>
    });

    return (
      <div className="form-group">
        <select className="form-control" onChange={this.handleSelect} value={this.state.from}>
          {accounts}
        </select>
      </div>
    )
  }
});

module.exports = AccountDropdown;
