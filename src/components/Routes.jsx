import React from 'react';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';

import BasePage from './BasePage.jsx';
import HomePage from './HomePage.jsx';
import SimpleWalletView from './wallets/SimpleWalletView.jsx';
import MetaCoin from './metacoin/MetaCoinView';

var Routes = React.createClass({
  render: function() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={BasePage}>
          <IndexRoute component={HomePage} />
          <Route path="/simplewallet" component={SimpleWalletView} />
          <Route path="/metacoin" component={MetaCoin} />
        </Route>
      </Router>
    )
  }
});

module.exports = Routes;
