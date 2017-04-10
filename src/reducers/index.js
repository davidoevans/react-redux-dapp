import { combineReducers } from 'redux'

import accounts from './accounts'
import cryptos from './cryptos'
import transfer from './transfer'
import transactions from './transactions'

export default combineReducers({ accounts, transactions, transfer, cryptos })
