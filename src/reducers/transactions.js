import * as types from '../constants/ActionTypes'

const transaction = (state, action) => {
  switch (action.type) {
    case types.ADD_TRANSACTION:
      return {
        blockHash: action.transaction.blockHash,
        blockNumber: action.transaction.blockNumber,
        hash: action.transaction.hash,
        from: action.transaction.from,
        to: action.transaction.to,
        nonce: action.transaction.nonce,
        gas: action.transaction.gas,
        gasPrice: action.transaction.gasPrice
      }
    default:
      return state
  }
}

const transactions = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TRANSACTION:
      return [
        transaction(undefined, action),
          ...state
        ]
    default:
      return state
  }
}

export default transactions
