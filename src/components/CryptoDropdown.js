import React from 'react'

const CryptoDropdown = ({ label, cryptos, action }) => (
  <div className="form-group">
    <label className="col-sm-2 control-label">{label}</label>
    <div className="col-sm-6">
      <select className="form-control" onChange={
          (e) => action(e.target.value)}>
        {cryptos.map(crypto =>
          <option key={crypto.id}>{crypto.name}</option>
          )
        }
      </select>
    </div>
  </div>
)

export default CryptoDropdown
