import React from 'react';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';

import BasePage from './BasePage.jsx';
import HomePage from './HomePage.jsx';
import SimpleWalletContainer from './wallets/SimpleWalletContainer.jsx';

var Routes = React.createClass({
  render: function() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={BasePage}>
          <IndexRoute component={HomePage} />
          <Route path="/simplewallet" component={SimpleWalletContainer} />
        </Route>
      </Router>
    )
  }
});

module.exports = Routes;
