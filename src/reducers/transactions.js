import Web3 from 'web3'

export const SHOW_TRANSACTIONS = 'SHOW_TRANSACTIONS'
export const ADD_TRANSACTION = 'ADD_TRANSACTION'

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

const transaction = (state, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        blockHash: action.transaction.blockHash,
        blockNumber: action.transaction.blockNumber,
        hash: action.transaction.hash,
        from: action.transaction.from,
        to: action.transaction.to,
        nonce: action.transaction.nonce,
        gasUsed: action.transaction.receipt.gasUsed,
        gasPrice: action.transaction.gasPrice,
        cost: action.transaction.receipt.gasUsed * action.transaction.gasPrice.toNumber(),
        costEth: web3.fromWei(action.transaction.receipt.gasUsed * action.transaction.gasPrice.toNumber(), 'ether'),
        costCAD: web3.fromWei(action.transaction.receipt.gasUsed * action.transaction.gasPrice.toNumber(), 'ether') * 68
      }
    default:
      return state
  }
}

const transactions = (state = [], action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return [
        transaction(undefined, action),
          ...state
        ]
    default:
      return state
  }
}

export default transactions
