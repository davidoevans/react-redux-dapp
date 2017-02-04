import React from 'react';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';

import BasePage from './BasePage.jsx';
import HomePage from './HomePage.jsx';
import SimpleWalletView from './wallets/SimpleWalletView.jsx';
import MetaCoinView from './metacoin/MetaCoinView.jsx';
import Calculator from './temperature/Calculator.jsx';
import UPortView from './uport/UPortView.jsx';

var Routes = React.createClass({
  render: function() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={BasePage}>
          <IndexRoute component={HomePage} />
          <Route path="/simplewallet" component={() => (<SimpleWalletView web3={this.props.web3} />)} />
          <Route path="/metacoin" component={() => (<MetaCoinView web3={this.props.web3} />)} />
          <Route path="/uport" component={UPortView} />
          <Route path="temperature" component={Calculator} />
        </Route>
      </Router>
    )
  }
});

module.exports = Routes;
