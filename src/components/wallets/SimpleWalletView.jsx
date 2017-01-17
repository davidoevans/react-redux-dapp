import React from 'react';
import Reflux from 'reflux';
import Web3 from 'web3';

import Actions from '../reflux/actions.jsx';
// import WalletStore from '../reflux/WalletStore.jsx';
import AccountSummary from '../accounts/AccountSummary';
import AccountDropdown from '../accounts/AccountDropdown';
import AmountField from './AmountField.jsx';
import SendButton from './SendButton.jsx';

import SimpleWallet from '../../../contracts/SimpleWallet.sol';

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var SimpleWalletView = React.createClass({
//  mixins: [Reflux.listenTo(WalletStore, 'onChange')],
  getInitialState: function() {
    return {from: "", to: "", amount: "", balance: ""};
  },
  handleClick: function(val, e) {
    // send the ether
    console.log(this.refs.fieldAmount.state.amount);
    console.log("web3.eth.coinbase called directly: " + web3.eth.coinbase);
    var wallet = SimpleWallet.deployed()

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
                <AccountDropdown ref="account" />
              </div>
              <label className="col-sm-1 control-label">Balance:</label>
              <div className="col-sm-3">
                <input className="form-control" type="text" value={this.state.balance} readOnly/>
              </div>
              <div className="col-sm-3">
                <AmountField ref="fieldAmount" />
              </div>
              <div className="col-sm-3">
                <SendButton onClick={this.handleClick} value={this.state.value} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SimpleWalletView;
