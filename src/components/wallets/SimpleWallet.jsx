import React from 'react';
import AmountField from './AmountField.jsx';
import SendButton from './SendButton.jsx';

var SimpleWallet = React.createClass({
  getInitialState: function() {
    return {val: ""};
  },
  handleClick: function(val, e) {
    // send the ether
    console.log(this.refs.fieldAmount.state.amount);
  },
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
              <div className="col-sm-3">
                <SendButton onClick={this.handleClick} value={this.state.value} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SimpleWallet;
