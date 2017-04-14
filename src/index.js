import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'
import { getAllAccounts } from './actions'
import { getCryptos } from './actions'
import { fetchTransactions } from './actions'
import App from './containers/App'
import YAEEContainer from './containers/YAEEContainer'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, ...middleware),
)
store.dispatch(getAllAccounts())
store.dispatch(getCryptos())
store.dispatch(fetchTransactions())

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="yaee" component={YAEEContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
