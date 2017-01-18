import Reflux from 'reflux';
import Actions from './actions.jsx';
import Web3 from 'web3';

var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

var AccountStore = Reflux.createStore({
  listenables: [Actions],
  getAccounts: function() {
    let _accounts = [];
    //web3.eth.accounts.map(function(account) {
    var addresses = web3.eth.accounts;
    for (var i = 0; i < addresses.length; i++) {
      _accounts.push({address: addresses[i],
        balance: web3.fromWei(web3.eth.getBalance(addresses[i]), 'ether')
      });
    };
    this.accounts = _accounts;
    this.fireUpdate();
  },
  getBalance: function(_account) {
    this.balance = web3.fromWei(web3.eth.getBalance(_account), 'ether');
    this.trigger('change', this.balance);
  },
  fireUpdate: function() {
    this.trigger('change', this.accounts);
  }
});

module.exports = AccountStore;
