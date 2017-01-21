import React from 'react';

import AddressDropdown from '../accounts/AddressDropdown.jsx';
import AmountInput from '../inputs/AmountInput.jsx';
import SendButton from '../buttons/SendButton.jsx';

var MetaCoinView = React.createClass( {
  getInitialState: function() {
    return {toAddress: "", amount: ""};
  },
  handleAmountChange: function(value) {
    this.setState({amount: value});
  },
  handleAddressSelect: function(value) {
    this.setState({toAddress: value});
  },
  handleSend: function() {
    console.log('sending ' + this.state.amount + " to " + this.state.toAddress);
  },
  render: function() {
    return (
        <div className="row">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3><b>MetaCoin</b> Example React Truffle Dapp</h3>
              <br />
              <h3>You have <b>META</b></h3>
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-sm-6">
                  <h3><b>Send</b></h3>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <label className="col-sm-1 control-label">Amount:</label>
                  <AmountInput value={this.state.value} onChange={this.handleAmountChange}/>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <label className="col-sm-1 control-label">To Address:</label>
                  <AddressDropdown onSelect={this.handleAddressSelect} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <SendButton onSend={this.handleSend} />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
})

module.exports = MetaCoinView;
