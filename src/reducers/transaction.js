import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

const detail = (state = {}, action) => {
  switch (action.type) {
    case types.SELECT_FROM_ADDRESS:
      console.log(`reducer: SELECT_FROM_ADDRESS ${action.fromAddress}`)
      return {
        ...state,
        from: action.address
      }
    case types.SELECT_TO_ADDRESS:
      return {
        ...state,
        to: action.address
      }
    case types.SELECT_CRYPTO:
      return {
        ...state,
        crypto: action.crypto
      }
    case types.ENTER_AMOUNT:
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
