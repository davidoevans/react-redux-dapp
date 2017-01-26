import React from 'react';
import Reflux from 'reflux';
import Web3 from 'web3';

import Actions from '../reflux/actions.jsx';
import AccountStore from '../reflux/AccountStore.jsx';
import AccountSummary from '../accounts/AccountSummary';
import AddressDropdown from '../accounts/AddressDropdown';
import AmountInput from '../inputs/AmountInput.jsx';
import BalanceField from './BalanceField.jsx';
import SendButton from '../buttons/SendButton.jsx';

//import SimpleWallet from '../../../contracts/SimpleWallet.sol';

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var simplewalletContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"isAllowedToSend","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"receiver","type":"address"}],"name":"sendFunds","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"killWallet","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"}],"name":"allowAddressToSendMoney","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"}],"name":"disallowAddressToSendMoney","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_sender","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_sender","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"_beneficiary","type":"address"}],"name":"Withdrawal","type":"event"}]);
var simplewallet = simplewalletContract.new(
   {
     from: web3.eth.accounts[0],
     data: '0x606060405234610000575b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b6107538061005c6000396000f3006060604052361561006b576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630bc605ad1461019a578063b2686774146101e5578063b67ba1b514610235578063c400464814610244578063e481553e14610277575b6101985b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061011b575060011515600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515145b15610190577fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c3334604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1610195565b610000565b5b565b005b34610000576101cb600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506102aa565b604051808215151515815260200191505060405180910390f35b346100005761021f600480803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610359565b6040518082815260200191505060405180910390f35b346100005761024261052d565b005b3461000057610275600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105c1565b005b34610000576102a8600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610674565b005b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16806103515750600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b90505b919050565b6000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806104005750600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b1561052657823073ffffffffffffffffffffffffffffffffffffffff1631101515610525578173ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051809050600060405180830381858888f19350505050151561046857610000565b7e1a143d5b175701cb3246058ffac3d63945192075a926ff73a19930f09d587a338484604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a13073ffffffffffffffffffffffffffffffffffffffff16319050610527565b5b5b92915050565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156105be57600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b5b565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610670576001600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5b50565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610723576000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5b505600a165627a7a72305820325e33ed173c254117ea771e97ddfd3514b20863313aaeac07399ea1d79e7b9e0029',
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })

var SimpleWalletView = React.createClass({
  mixins: [Reflux.listenTo(AccountStore, 'onChange')],
  getInitialState: function() {
    return {accounts: [], from: "", to: "", amount: "", balance: "", allowed: false};
  },
  componentWillMount: function() {
    Actions.getAccounts();
  },
  onChange: function(event, _accounts) {
    const defaultAddress = _accounts[0].address;

    // TODO get allowed from _accounts and/or store
    this.setState({accounts: _accounts, from: defaultAddress,
      balance: _accounts[0].balance /* web3.fromWei(web3.eth.getBalance(defaultAddress), 'ether')*/ ,
      allowed: true});
  },
  handleAmountChange: function(value) {
    this.setState({amount: value});
  },
  handleAddressSelect: function(value) {
    //var wallet = SimpleWallet.deployed();
    let ether = web3.fromWei(web3.eth.getBalance(value), 'ether');
    let allowed = simplewallet.isAllowedToSend.call(value);
    this.setState({from: value, balance: ether, allowed: allowed});
  },
  handleSend: function() {
    console.log('sending ' + this.state.amount + ' from ' + this.state.from);

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
              <div className="col-sm-7">
                <AddressDropdown defaultOption={this.state.from} options={this.state.accounts} onSelect={this.handleAddressSelect} />
              </div>
              <div className="col-sm-3">
                <label className="checkbox-inline">
                  <input className="checkbox" type="checkbox" checked={this.state.allowed}/>Allowed
                </label>
              </div>
            </div>
            <div className="row">
              <label className="col-sm-1 control-label">Balance:</label>
              <div className="col-sm-3">
                <input className="form-control" type="text" value={this.state.balance} readOnly/>
              </div>
              <label className="col-sm-1 control-label">Amount:</label>
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
