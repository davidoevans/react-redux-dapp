import React from 'react';

import AddressDropdown from './AddressDropdown';
import AmountInput from './AmountInput';
import SendMetaButton from './SendMetaButton';

var MetaCoinView = React.createClass( {
  getInitialState: function() {
    return {account: "", amount: ""};
  },
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="panel panel-primary">
            <div className="panel-heading text-center">
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
                  <AmountInput name="amount" />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <label className="col-sm-1 control-label">To Address:</label>
                  <AddressDropdown name="from" />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <SendMetaButton onClick={this.handleClick} value={this.state.value} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
})

module.export = MetaCoinView;
