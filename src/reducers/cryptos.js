import { combineReducers } from 'redux'

export const RECEIVE_CRYPTOS = 'RECEIVE_CRYPTOS'

const byId = (state = {}, action) => {
  //debugger;
  switch (action.type) {
    case RECEIVE_CRYPTOS:
      return {
        ...state,
        ...action.cryptos.reduce((obj, crypto) => {
          obj[crypto.id] = crypto
          return obj
        }, {})
      }
      default:
        return state
  }
}

const allCryptos = (state = [], action) => {
  //debugger;
  switch (action.type) {
    case RECEIVE_CRYPTOS:
      return action.cryptos.map(crypto => crypto.id)
    default:
      return state
  }
}

export const getCryptoById = (state, id) =>
  state.byId[id]

export const getSupportedCryptos = state =>
  state.allCryptos.map(id => getCryptoById(state, id))

export default combineReducers({
  byId,
  allCryptos
})
