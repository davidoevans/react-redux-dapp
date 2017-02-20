import React, { PropTypes } from 'react'

const Account = ({ address, balance }) => (
  <div>
    {address} - {balance.toNumber()}
  </div>
)

Account.propTypes = {
  address: PropTypes.string,
  balance: PropTypes.object
}

export default Account
