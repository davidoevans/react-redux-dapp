import Reflux from 'reflux';
import Actions from './actions.jsx';
import Web3 from 'web3';

// import truffleConfig from '../../../truffle.js';

// var web3Location = `http://${truffleConfig.rpc.host}:${truffleConfig.rpc.port}`
var web3Provided;
// Supports Metamask and Mist, and other wallets that provide 'web3'.
if (typeof web3 === 'undefined') {
  // Use the Mist/wallet provider.
  // eslint-disable-next-line
  web3Provided = new Web3(web3.currentProvider);
} else {
  web3Provided = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
}

var AccountStore = Reflux.createStore({
  listenables: [Actions],
  getAccounts: function() {
    //web3.eth.accounts.map(function(account) {
    web3Provided.eth.getAccounts(function(error, addresses) {
      let _accounts = [];
      for (var i = 0; i < addresses.length; i++) {
        _accounts.push({
          address: addresses[i],
          balance: web3Provided.fromWei(web3Provided.eth.getBalance(addresses[i]), 'ether')

          // , 'latest', function(error, result) {
          //   if (!error) {
          //     return result;
          //   } else {
          //     console.log(error);
          //   }
          // }), 'ether')
        })
      };
      this.accounts = _accounts;
      this.fireUpdate();
    }.bind(this));
  },
  getAddressList: function() {
    this.addressList = web3Provided.eth.accounts;
    // this.addressList = _accounts.map(function(account) {
    //   return {address: account};
    // })
    this.trigger('change', this.addressList);
  },
  getBalance: function(_account) {
    this.balance = web3Provided.fromWei(this.getBalance(_account, 'latest', function(error, result) {
      if (!error) {
        return result;
      } else {
        console.log(error);
      }
    }), 'ether');
    this.trigger('change', this.balance);
  },
  fireUpdate: function() {
    this.trigger('change', this.accounts);
  }
});

module.exports = AccountStore;
