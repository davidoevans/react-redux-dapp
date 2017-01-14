import React from 'react';
import Reflux from 'reflux';
import Actions from './actions.jsx';
import Web3 from 'web3';

var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

var AccountStore = Reflux.createStore({
  listenables: [Actions],
  getAccounts: function() {
    this.accounts = web3.eth.accounts;
    this.fireUpdate();
  },
  fireUpdate: function() {
    this.trigger('change', this.accounts);
  }
});

module.exports = AccountStore;
