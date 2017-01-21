import React from 'react';
import Reflux from 'reflux';
import Web3 from 'web3';

import Actions from '../reflux/actions.jsx';
// import WalletStore from '../reflux/WalletStore.jsx';
import AccountSummary from '../accounts/AccountSummary';
import AddressDropdown from '../accounts/AddressDropdown';
import AmountInput from '../inputs/AmountInput.jsx';
import SendButton from '../buttons/SendButton.jsx';

import SimpleWallet from '../../../contracts/SimpleWallet.sol';

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var SimpleWalletView = React.createClass({
//  mixins: [Reflux.listenTo(WalletStore, 'onChange')],
  getInitialState: function() {
    return {from: "", to: "", amount: "", balance: ""};
  },
  handleAmountChange: function(value) {
    this.setState({amount: value});
  },
  handleAddressSelect: function(value) {
    this.setState({from: value});
  },
  handleSend: function() {
    console.log('sending ' + this.state.amount + ' from ' + this.state.from);
    //    var wallet = SimpleWallet.deployed()
  },
  render: function() {
    return (
      <div className="row">
        <div className="panel panel-primary">
          <div className="panel-heading text-center">
            <h3>Simple Wallet</h3>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-sm-6">
                <AccountSummary />
              </div>
            </div>
            <div className="row">
              <label className="col-sm-1 control-label">Account:</label>
              <div className="col-sm-3">
                <AddressDropdown onSelect={this.handleAddressSelect} />
              </div>
              <label className="col-sm-1 control-label">Balance:</label>
              <div className="col-sm-3">
                <input className="form-control" type="text" value={this.state.balance} readOnly/>
              </div>
              <div className="col-sm-3">
                <AmountInput value={this.state.value} onChange={this.handleAmountChange} />
              </div>
              <div className="col-sm-3">
                <SendButton onSend={this.handleSend} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SimpleWalletView;
