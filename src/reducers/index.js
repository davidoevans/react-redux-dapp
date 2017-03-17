import { combineReducers } from 'redux'

import accounts from './accounts'
import cryptos from './cryptos'
import transaction from './transaction'
//import watch from './watchers'

export default combineReducers({ accounts, transaction, cryptos })
