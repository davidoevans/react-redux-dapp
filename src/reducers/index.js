import { combineReducers } from 'redux'

import accounts from './accounts'
import cryptos from './cryptos'
import transaction from './transaction'
import transactions from './transactions'

export default combineReducers({ accounts, transactions, transaction, cryptos })
