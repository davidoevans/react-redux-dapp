import React from 'react'

const CryptoDropdown = ({ label, cryptos, action }) => (
  <div className="form-group form-group-sm">
    <label className="col-sm-2 control-label">{label}</label>
    <div className="col-sm-10">
      <select className="form-control" onChange={
          (e) => action(e.target.value)}>
        <option value="" selected disabled>Select Account</option>
        {cryptos.map(crypto =>
          <option key={crypto.id}>{crypto.symbol}</option>
          )
        }
      </select>
    </div>
  </div>
)

export default CryptoDropdown
