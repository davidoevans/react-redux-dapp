import React from 'react'

const AddressDropdown = ({ label, accounts, action }) => (
  <div className="form-group form-group-sm">
    <label className="col-sm-2 control-label">{label}</label>
    <div className="col-sm-10">
      <select className="form-control" onChange={
          (e) => action(e.target.value)}>
        <option value="" selected disabled>Select Account</option>
        {accounts.map(account =>
          <option key={account.address}>{account.address}</option>
          )
        }
      </select>
    </div>
  </div>
)

export default AddressDropdown
