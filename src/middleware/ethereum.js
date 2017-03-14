/**
 * Ethereum service API
 */
import Web3 from 'web3'
import { getBalance } from './metacoin'

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

const accountNames = [
  'coinbase',
  'Marc Riehm',
  'David Evans',
  'Peter Bishop',
  'Alex Tapscott',
  'Charlie Evans',
  'Estelle Evans',
  'Jonah Group',
  'Consensys',
  'R3'
];

const CADcoin = 38

export default {
  getAccounts: (cb) => {
    web3.eth.getAccounts(async function(error, addresses) {
      let _accounts = [];

      for (var i = 0; i < addresses.length; i++) {
        let eth = web3.fromWei(web3.eth.getBalance(addresses[i]), 'ether')
        _accounts.push({
          address: addresses[i],
          name: accountNames[i],
          balance: eth,
          cadCoin: eth * CADcoin,
          meta: await getBalance(addresses[i])
        })
      }
      cb(_accounts);
    })
  },
  transfer: (transaction) => {
    const sender = transaction.from
    const receiver = transaction.to
    const amount = web3.toWei(transaction.amount, "ether")

    return web3.eth.sendTransaction({from:sender, to:receiver, value: amount})
  },

}
