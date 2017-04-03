/**
 * Ethereum service API
 */
import Web3 from 'web3'
import { getBalance, sendCoin } from './metacoin'

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

const CADcoin = 68

export default {
  getAccounts: (cb) => {
    web3.eth.getAccounts(async function(error, addresses) {
      let _accounts = [];

      for (var i = 0; i < addresses.length; i++) {
        let eth = web3.fromWei(web3.eth.getBalance(addresses[i]), 'ether')
        _accounts.push({
          address: addresses[i],
          balance: eth,
          cadCoin: eth * CADcoin,
          meta: await getBalance(addresses[i])
        })
      }
      cb(_accounts);
    })
  },
  transfer: (transaction) => {

    if (transaction.crypto === 'ETH') {
      const amount = web3.toWei(transaction.amount, "ether")

      return web3.eth.sendTransaction({from:transaction.from, to:transaction.to, value: amount})
    } else {
      return sendCoin(transaction)
    }
  }

}
