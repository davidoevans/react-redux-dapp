import React, { PropTypes } from 'react';

const AccountsList = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
)

AccountsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default AccountsList
