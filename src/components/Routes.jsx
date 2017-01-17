import React from 'react';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';

import BasePage from './BasePage.jsx';
import HomePage from './HomePage.jsx';
import SimpleWalletView from './wallets/SimpleWalletView.jsx';

var Routes = React.createClass({
  render: function() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={BasePage}>
          <IndexRoute component={HomePage} />
          <Route path="/simplewallet" component={SimpleWalletView} />
        </Route>
      </Router>
    )
  }
});

module.exports = Routes;
