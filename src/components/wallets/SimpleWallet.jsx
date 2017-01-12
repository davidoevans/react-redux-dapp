import React from 'react';
import AmountField from './AmountField.jsx';

var SimpleWallet = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="panel panel-primary">
          <div className="panel-heading text-center">
            <h3>Simple Wallet</h3>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-sm-3">
                <AmountField ref="fieldAmount" />
              </div>
              <div className="col-xs-3">
                <button className="btn btn-success btn-raised" onClick={this.props.onClick}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SimpleWallet;
