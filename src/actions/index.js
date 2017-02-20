import ethereum from '../middleware/ethereum'
import shop from '../middleware/shop'
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

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const transfer = transaction => ({
  type: types.TRANSFER,
  transaction
})

export const emitTransfer = transaction => (dispatch, getState) => {
  ethereum.transfer(transaction => {
    dispatch(transfer(transaction))
  })
}
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

// Resets the currently visible error message
export const resetErrorMessage = () => ({
  type: RESET_ERROR_MESSAGE
})
