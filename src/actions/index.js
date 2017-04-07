import ethereum from '../middleware/ethereum'
import crypto from '../middleware/crypto'
import { RECEIVE_ACCOUNTS } from '../reducers/accounts'
import { RECEIVE_CRYPTOS } from '../reducers/cryptos'
import { SELECT_CRYPTO, SELECT_FROM_ADDRESS, SELECT_TO_ADDRESS, ENTER_AMOUNT } from '../reducers/transfer'
import { SHOW_TRANSACTIONS, ADD_TRANSACTION } from '../reducers/transactions'

import Web3 from 'web3'

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

const receiveAccounts = accounts => ({
  type: RECEIVE_ACCOUNTS,
  accounts: accounts
})

const setFromAddress = address => ({
  type: SELECT_FROM_ADDRESS,
  address
})

const setToAddress = address => ({
  type: SELECT_TO_ADDRESS,
  address
})

export const addTransactionAction = transaction => ({
  type: ADD_TRANSACTION,
  transaction
})

export const showTransactions = transactions => ({
  type: SHOW_TRANSACTIONS,
  transactions
})

export const selectFromAddress = address => (dispatch, getState) => {
  dispatch(setFromAddress(address))
}

export const selectToAddress = address => (dispatch, getState) => {
  dispatch(setToAddress(address))
}

export const getAllAccounts = () => (dispatch, getState) => {
  ethereum.getAccounts(accounts => {
    dispatch(receiveAccounts(accounts))
    if (typeof getState().transfer.detail.from === "undefined") {
      dispatch(setFromAddress(accounts[0].address))
    }
    if (typeof getState().transfer.detail.to === "undefined") {
      dispatch(setToAddress(accounts[1].address))
    }

  })
}

const setCrypto = id => ({
  type: SELECT_CRYPTO,
  crypto: id
})

export const selectCrypto = id => (dispatch, getState) => {
  dispatch(setCrypto(id))
}

const receiveSupportedCryptos = cryptos => ({
  type: RECEIVE_CRYPTOS,
  cryptos: cryptos
})

export const getCryptos = () => (dispatch, getState) => {
  crypto.getCryptos(cryptos => {
    dispatch(receiveSupportedCryptos(cryptos))
    if (typeof getState().transfer.detail.crypto === "undefined") {
      dispatch(setCrypto(cryptos[0]))
    }
  })
}

const setAmount = amount => ({
  type: ENTER_AMOUNT,
  amount
})

export const enterAmount = amount => (dispatch, getState) => {
    dispatch(setAmount(amount))
}

export const emitTransfer = () => (dispatch, getState) => {
  let txn = getState().transfer.detail
  let txnHash = ethereum.transfer(txn)
  console.log(`txnHash: ${txnHash}`)
}

export const fetchTransactions = () => (dispatch, getState) => {
  let filter = web3.eth.filter('latest');
  return filter.watch(function(error, result) {
      if (error) {
        console.log(error)
      } else{
        console.log(`result: ${result}`)
        var block = web3.eth.getBlock(result, true)

        console.log('block #' + block.number)
        console.dir(block.transactions)
        //console.log(web3.version)
        //debugger

        // we know there is only 1 txn per block in test...accessing only the first transactions
        // in a block won't work beyond localhost
        let txn = block.transactions[0]
        txn.receipt = web3.eth.getTransactionReceipt(block.transactions[0].hash)
        dispatch(addTransactionAction(txn))
        dispatch(showTransactions(getState().transactions))
        dispatch(getAllAccounts())
        //debugger
      }
    }
  )

}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

// Resets the currently visible error message
export const resetErrorMessage = () => ({
  type: RESET_ERROR_MESSAGE
})
