import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

const cryptos = (state = {}, action) => {
  switch (action.type) {
    case types.RECEIVE_SUPPORTED_CRYPTOS:
      return {
        ...state,
        supported: action.cryptos
      }
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  //debugger;
  switch (action.type) {
    case types.RECEIVE_SUPPORTED_CRYPTOS:
      return {
        ...state,
        ...action.cryptos.reduce((obj, crypto) => {
          obj[crypto.id] = crypto
          return obj
        }, {})
      }
      default:
        const { id } = action
        if (id) {
          return {
            ...state,
            [id]: cryptos(state[id], action)
          }
        }
        return state
  }
}

const allCryptos = (state = [], action) => {
  //debugger;
  switch (action.type) {
    case types.RECEIVE_SUPPORTED_CRYPTOS:
      return action.cryptos.map(crypto => crypto.id)
    default:
      return state
  }
}

export const getCrypto = (state, id) =>
  state.byId[id]

export const getSupportedCryptos = state =>
  state.allCryptos.map(id => getCrypto(state, id))

export default combineReducers({
  byId,
  allCryptos
})
