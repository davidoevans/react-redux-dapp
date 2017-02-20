import { combineReducers } from 'redux'
// import accounts, * as fromAccounts from './accounts'
// import products, * as fromProducts from './products'

import accounts from './accounts'
import cryptos from './cryptos'
import transaction from './transaction'

export default combineReducers({ accounts, transaction, cryptos })

// const getProduct = (state, id) => fromProducts.getProduct(state.products, id)
// const getAccount = (state, address) => fromAccounts.getAccount(state.accounts, address)
