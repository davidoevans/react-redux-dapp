import React, { PropTypes } from 'react'
import Account from './Account'

const AccountItem = ({ account }) => (
  <div>
    <Account address={account.address} balance={account.balance} />
  </div>
)

AccountItem.propTypes = {
  account: PropTypes.shape({
    address: PropTypes.string.isRequired,
    balance: PropTypes.object.isRequired
  }).isRequired
}

export default AccountItem
