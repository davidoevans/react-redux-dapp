import React from 'react';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';

import BasePage from './BasePage.jsx';
import HomePage from './HomePage.jsx';
import SimpleWalletView from './wallets/SimpleWalletView.jsx';
import MetaCoinView from './metacoin/MetaCoinView.jsx';

var Routes = React.createClass({
  render: function() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={BasePage}>
          <IndexRoute component={HomePage} />
          <Route path="/simplewallet" component={SimpleWalletView} />
          <Route path="/metacoin" component={MetaCoinView} />
        </Route>
      </Router>
    )
  }
});

module.exports = Routes;
