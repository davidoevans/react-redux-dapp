import React from 'react';
import Reflux from 'reflux';
import Web3 from 'web3';

import Actions from '../reflux/actions.jsx';
import AccountStore from '../reflux/AccountStore.jsx';
import AddressDropdown from '../accounts/AddressDropdown.jsx';
import AccountSummary from '../accounts/AccountSummary.jsx';
import AmountInput from '../inputs/AmountInput.jsx';
import SendButton from '../buttons/SendButton.jsx';

import { default as contract } from 'truffle-contract'

// Import our contract artifacts and turn them into usable abstractions.
import metacoin_artifacts from '../../../build/contracts/MetaCoin.json'

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// MetaCoin is our usable abstraction, which we'll use through the code below.
var MetaCoin = contract(metacoin_artifacts);
// Bootstrap the MetaCoin abstraction for Use.
MetaCoin.setProvider(web3.currentProvider);

// const provider = new Web3.providers.HttpProvider('http://localhost:8545');
// MetaCoin.setProvider(provider);

// import MetaCoin from '../../../build/contracts/MetaCoin.sol.js';
// var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//
// var metacoinContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}]);
//
// // access a contract already deployed to a specific address
// var metacoin = metacoinContract.at("0xd92099a362198f6ce5537cc5f57f0e9ca168cd6e");

// Create a new contract
// var metacoin = metacoinContract.new(
//    {
//      from: web3.eth.accounts[0],
//      data: '0x606060405234610000575b612710600060003273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b5b6103a4806100616000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680637bd703e81461005457806390b98a111461009b578063f8b2cb4f146100ef575b610000565b3461000057610085600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610136565b6040518082815260200191505060405180910390f35b34610000576100d5600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506101d2565b604051808215151515815260200191505060405180910390f35b3461000057610120600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061032e565b6040518082815260200191505060405180910390f35b600073__ConvertLib____________________________6396e4ee3d61015b8461032e565b60026000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060206040518083038186803b156100005760325a03f415610000575050506040518051905090505b919050565b600081600060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156102245760009050610328565b81600060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b6000600060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b9190505600a165627a7a7230582029b1b0a0bf5f14873f3c506a6cdeb3322404bd26e990b12fdfcd5f140d4053c70029',
//      gas: '4700000'
//    }, function (e, contract){
//     console.log(e, contract);
//     if (typeof contract.address !== 'undefined') {
//          console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
//     }
//  })

var MetaCoinView = React.createClass( {
  mixins: [Reflux.listenTo(AccountStore, 'onChange')],
  getInitialState: function() {
    return {accounts: [], toAddress: "", amount: ""};
  },
  componentWillMount: function() {
    Actions.getAccounts();
  },
  onChange: function(event, _accounts) {
    const defaultAddress = _accounts[0].address;
    this.setState({accounts: _accounts, toAddress: defaultAddress});
  },
  handleAmountChange: function(value) {
    this.setState({amount: value});
  },
  handleAddressSelect: function(value) {
    this.setState({toAddress: value});
  },
  handleSend: function() {
    //console.log('sending ' + this.state.amount + " to " + this.state.toAddress);
//    console.log(metacoin.getBalance(this.state.toAddress));
    //console.log('sending coin: ' + metacoin.sendCoin(this.state.toAddress, this.state.amount));
    // var metacoin = MetaCoin.deployed();
    var amount = this.state.amount;
    var toAddress = this.state.toAddress;
    var fromAddress = '0xa476c1721296c7f59ca840fe2939e4b366a6abf9';

    var meta;
    MetaCoin.deployed().then(function(instance) {
      meta = instance;
      // return meta.sendCoin(this.state.toAddress, this.state.amount, {from: account});
      return meta.sendCoin(toAddress, amount, {from: fromAddress});
    }).then(function() {
      console.log('Transaction successful!');
    }).catch(function(e) {
      console.log(e);
    });
    // var resp = metacoin.sendCoin(this.state.toAddress, this.state.amount);
    // console.log('resp: ' + resp);
  },
  render: function() {
    return (
        <div className="row">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3><b>MetaCoin</b> Example React Truffle Dapp</h3>
              <br />
              <h3>You have <b>META</b></h3>
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-sm-6">
                  <h3><b>Send</b></h3>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <label className="col-sm-1 control-label">Amount:</label>
                  <AmountInput value={this.state.value} onChange={this.handleAmountChange}/>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <label className="col-sm-1 control-label">To Address:</label>
                  <AddressDropdown defaultOption={this.state.toAddress} options={this.state.accounts} onSelect={this.handleAddressSelect} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <SendButton onSend={this.handleSend} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <AccountSummary />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
})

module.exports = MetaCoinView;
