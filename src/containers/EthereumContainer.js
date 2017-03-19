import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getAllAccounts } from '../reducers/accounts'
import { getSupportedCryptos } from '../reducers/cryptos'
import { selectFromAddress, selectToAddress, selectCrypto, enterAmount, emitTransfer, addTransaction } from '../actions'
import AddressDropdown from '../components/AddressDropdown'
import CryptoDropdown from '../components/CryptoDropdown'
import AmountInput from '../components/AmountInput'
import AccountTable from '../components/AccountTable'
import TransactionTable from '../components/TransactionTable'

const EthereumContainer = ({ accounts, cryptos, addTransaction, transactions, selectFromAddress, selectToAddress, selectCrypto, enterAmount, emitTransfer }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3>Ethereum - react-redux-dapp</h3>
          </div>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-sm-6">
              <div className="form-horizontal">
                <AddressDropdown label="From" accounts={accounts} action={selectFromAddress} />
                <AddressDropdown label="To" accounts={accounts} action={selectToAddress} />
                <CryptoDropdown label="Crypto" cryptos={cryptos} action={selectCrypto} />
                <AmountInput label="Amount" action={enterAmount} />
              </div>
              <div className="col-sm-offset-5">
                <button type="submit" className="btn btn-primary" onClick={() => emitTransfer()}>Transfer</button>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="panel panel-default height">
                <div className="panel-heading">Transaction Details</div>
                <div className="panel-body">
                  <strong>David Peere:</strong><br/>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <TransactionTable transactions={transactions} />
          <hr/>
          <AccountTable accounts={accounts} />
        </div>
      </div>
    </div>
)}

EthereumContainer.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.shape({
    address: PropTypes.string.isRequired,
    balance: PropTypes.object.isRequired
  })).isRequired
}

const mapStateToProps = state => ({
  accounts: getAllAccounts(state.accounts),
  cryptos: getSupportedCryptos(state.cryptos),
  transactions: state.transactions
})

export default connect(
  mapStateToProps,
  { selectFromAddress, selectToAddress, selectCrypto, enterAmount, emitTransfer, addTransaction }
)(EthereumContainer)
