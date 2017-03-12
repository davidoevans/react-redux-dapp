/**
 * Ethereum service API
 */
import Web3 from 'web3'
import { getBalance } from './metacoin'

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

const accountNames = [
  'coinbase',
  'testrpc 1',
  'testrpc 2',
  'testrpc 3',
  'testrpc 4',
  'testrpc 5',
  'testrpc 6',
  'testrpc 7',
  'testrpc 8',
  'testrpc 9'
];

export default {
  getAccounts: (cb) => {
    web3.eth.getAccounts(async function(error, addresses) {
      let _accounts = [];
      for (var i = 0; i < addresses.length; i++) {
        _accounts.push({
          address: addresses[i],
          name: accountNames[i],
          balance: web3.fromWei(web3.eth.getBalance(addresses[i]), 'ether'),
          meta: await getBalance(addresses[i])
        })
      }
      cb(_accounts);
    })
  },
  transfer: (transaction, cb) => {
    const sender = transaction.from
    const receiver = transaction.to
    const amount = web3.toWei(transaction.amount, "ether")

    return web3.eth.sendTransaction({from:sender, to:receiver, value: amount})
  },

}
