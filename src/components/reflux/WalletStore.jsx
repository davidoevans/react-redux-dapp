import Reflux from 'reflux';
import Actions from './actions.jsx';
import Web3 from 'web3';
import HTTP from '../services/HttpService.js';

import SimpleWallet from '../../../contracts/SimpleWallet.sol';

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var WalletStore = Reflux.createStore({
  listenables: [Actions],
  Deposit: function() {
    HTTP.get('/deposit').then(function(_amount) {
      this.amount = _amount;
      this.fireUpdate();
    }.bind(this));
  },
  Withdrawal: function() {
    HTTP.get('/withdraw').then(function(_amount) {
      this.amount = _amount;
      this.fireUpdate();
    }.bind(this));
  },
  // Refresh function
  fireUpdate: function() {
    this.trigger('change', this.amount);
  }

})
