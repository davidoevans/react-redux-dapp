import ethereum from '../middleware/ethereum'
import crypto from '../middleware/crypto'
import * as types from '../constants/ActionTypes'

const receiveAccounts = accounts => ({
  type: types.RECEIVE_ACCOUNTS,
  accounts: accounts
})

export const getAllAccounts = () => dispatch => {
  ethereum.getAccounts(accounts => {
    dispatch(receiveAccounts(accounts))
  })
}

const receiveSupportedCryptos = cryptos => ({
  type: types.RECEIVE_SUPPORTED_CRYPTOS,
  cryptos: cryptos
})

export const getSupportedCryptos = () => dispatch => {
  crypto.getCryptos(cryptos => {
    dispatch(receiveSupportedCryptos(cryptos))
  })
}

const setFromAddress = address => ({
  type: types.SELECT_FROM_ADDRESS,
  address
})

export const selectFromAddress = address => (dispatch, getState) => {
  console.log(`action: selectFromAddress: ${address}`)
  dispatch(setFromAddress(address))
}

const setCrypto = id => ({
  type: types.SELECT_CRYPTO,
  crypto: id
})

export const selectCrypto = id => (dispatch, getState) => {
  dispatch(setCrypto(id))
}

const setToAddress = address => ({
  type: types.SELECT_TO_ADDRESS,
  address
})

export const selectToAddress = address => (dispatch, getState) => {
  console.log(`action: selectToAddress: ${address}`)
  dispatch(setToAddress(address))
}

const setAmount = amount => ({
  type: types.ENTER_AMOUNT,
  amount
})

export const enterAmount = amount => (dispatch, getState) => {
    dispatch(setAmount(amount))
}

const transfer = txnHash => ({
  type: types.TRANSFER,
  confirmation: txnHash
})

export const emitTransfer = () => (dispatch, getState) => {
  let txn = getState().transaction.detail
  let txnHash = ethereum.transfer(txn)
  console.log(`txnHash: ${txnHash}`)
  dispatch(transfer(txnHash))
  dispatch(getAllAccounts())
}

const setWatch = watch => ({
  type: types.WATCH,
  watch: true
})

export const toggleWatch = () => (dispatch, getState) => {
    let watch = getState().watch
    ethereum.watch(true)
    dispatch(setWatch(watch))
}

// const block = transactions => ({
//   type: types.RECEIPT,
//   transactions: transactions
// })
//
// export const recieveBlock = () => (dispatch, getState) => {
//   let txns = getState().blocks.transactions
//   // dispatch(block(txns))
//   // dispatch(getAllAccounts())
// }

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

// Resets the currently visible error message
export const resetErrorMessage = () => ({
  type: RESET_ERROR_MESSAGE
})
