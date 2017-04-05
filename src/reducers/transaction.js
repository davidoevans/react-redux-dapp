import { combineReducers } from 'redux'

export const SELECT_CRYPTO = 'SELECT_CRYPTO'
export const SELECT_FROM_ADDRESS = 'SELECT_FROM_ADDRESS'
export const SELECT_TO_ADDRESS = 'SELECT_TO_ADDRESS'
export const ENTER_AMOUNT = 'ENTER_AMOUNT'

const detail = (state = {}, action) => {
  switch (action.type) {
    case SELECT_FROM_ADDRESS:
      console.log(`reducer: SELECT_FROM_ADDRESS ${action.fromAddress}`)
      return {
        ...state,
        from: action.address
      }
    case SELECT_TO_ADDRESS:
      return {
        ...state,
        to: action.address
      }
    case SELECT_CRYPTO:
      return {
        ...state,
        crypto: action.crypto
      }
    case ENTER_AMOUNT:
      return {
        ...state,
        amount: action.amount
      }
    default:
      return state
  }
}

export default combineReducers({
  detail
})
