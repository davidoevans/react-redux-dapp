import React from 'react';

var AddressDropdown = React.createClass({
  handleSelect: function(e) {
    this.props.onSelect(e.target.value);
  },
  render: function() {
        
    var accounts = this.props.options.map(function(account) {
      return <option key={account.address}>{account.address}</option>
    });

    return (
      <div className="form-group">
        <select value={this.props.defaultOption} className="form-control" onChange={this.handleSelect} >
          {accounts}
        </select>
      </div>
    )
  }
});

module.exports = AddressDropdown;
