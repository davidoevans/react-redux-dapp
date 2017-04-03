import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'
import { getAllAccounts } from './actions'
import { getSupportedCryptos } from './actions'
import { fetchTransactions } from './actions'
import App from './containers/App'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, ...middleware),
)
store.dispatch(getAllAccounts())
store.dispatch(getSupportedCryptos())
store.dispatch(fetchTransactions())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
