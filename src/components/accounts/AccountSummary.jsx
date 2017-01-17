import React from 'react';
import Reflux from 'reflux';
import Actions from '../reflux/actions.jsx';
import AccountStore from '../reflux/AccountStore.jsx';

var AccountSummary = React.createClass({
  mixins: [Reflux.listenTo(AccountStore, 'onChange')],
  getInitialState: function() {
    return {accounts: []};
  },
  componentWillMount: function() {
    Actions.getAccounts();
  },
  onChange: function(event, _accounts) {
    this.setState({accounts: _accounts});
  },
  render: function() {
    let cols = [
      {key: 'address', label: 'Address'},
      {key: 'balance', label: 'Balance (Ether)'}
    ];

    var headers = cols.map(function(col) {
      return <th key={col.key}>{col.label}</th>
    });

    var rows = this.state.accounts.map(function(account) {
      //var cells = (<td>{account.address}</td>);
      var cells = cols.map(function(col) {
        return <td key={col.key}>{String(account[col.key])}</td>
      });
      return <tr key={account.address}>{cells}</tr>
    });

    return (
      <table className="table">
        <thead><tr>{headers}</tr></thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
});

module.exports = AccountSummary;
