import React from 'react';
import Reflux from 'reflux';
import Web3 from 'web3';

import Actions from '../reflux/actions.jsx';
import WalletStore from '../reflux/WalletStore.jsx';
import AccountDropdown from '../accounts/AccountDropdown';
import AmountField from './AmountField.jsx';
import SendButton from './SendButton.jsx';

// import SimpleWallet from '../../../contracts/SimpleWallet.sol';

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var SimpleWalletContainer = React.createClass({
  mixins:[Reflux.listenTo(WalletStore, 'onChange')],
  getInitialState: function() {
    return {from: "", to: "", amount: ""};
  },
  handleClick: function(val, e) {
    // send the ether
    console.log(this.refs.fieldAmount.state.amount);
    //web3.
    // should this call web3 or be related to a listener of events?
    // am sending ether and then reporting on the results
    //var wallet = SimpleWallet.deployed();
    // wallet.isAllowedToSend.call(accounts[0]).then(function(isAllowed) {
    //   this.setState({from: isAllowed});
    //   console.log('isAllowed: ' + isAllowed);
    // })
    console.log("web3.eth.coinbase called directly: " + web3.eth.coinbase);
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
              <label className="col-sm-2 control-label">Account</label>
              <div className="col-sm-3">
                <AccountDropdown ref="account" />
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

module.exports = SimpleWalletContainer;
