/**
 * Ethereum service API
 */
import Web3 from 'web3'

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

export default {
  getAccounts: (cb) => {
    web3.eth.getAccounts(function(error, addresses) {
      let _accounts = [];
      for (var i = 0; i < addresses.length; i++) {
        _accounts.push({
          address: addresses[i],
          balance: web3.fromWei(web3.eth.getBalance(addresses[i]), 'ether')
        })
      }
      cb(_accounts);
    })
  }
}
