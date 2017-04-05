import React from 'react'
import { connect } from 'react-redux'
import { getAllAccounts } from '../reducers/accounts'
import { getSupportedCryptos } from '../reducers/cryptos'
import { selectFromAddress, selectToAddress, selectCrypto, enterAmount, emitTransfer } from '../actions'
import AddressDropdown from '../components/AddressDropdown'
import CryptoDropdown from '../components/CryptoDropdown'
import AmountInput from '../components/AmountInput'
import AccountTable from '../components/AccountTable'
import TransactionTable from '../components/TransactionTable'

const YAEEContainer = ({ accounts, cryptos, transactions, selectFromAddress, selectToAddress, selectCrypto, enterAmount, emitTransfer }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3>YAEE - Yet Another Ethereum Explorer</h3>
          </div>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-sm-6">
              <div className="form-horizontal">
                <AddressDropdown label="From" accounts={accounts} action={selectFromAddress} />
                <AddressDropdown label="To" accounts={accounts} action={selectToAddress} />
                <CryptoDropdown label="Crypto" cryptos={cryptos} action={selectCrypto} />
              </div>
              <div className="form-horizontal">
                <div className="form-group form-group-sm">
                  <div className="col-sm-8">
                    <AmountInput label="Amount" action={enterAmount} />
                  </div>
                  <div className="col-sm-2">
                    <button type="submit" className="btn btn-primary btn-sm" onClick={() => emitTransfer()}>Transfer</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TransactionTable id="transaction_table" transactions={transactions} />
          <hr/>
          <AccountTable accounts={accounts} />
        </div>
      </div>
    </div>
)}

const mapStateToProps = state => ({
  accounts: getAllAccounts(state.accounts),
  cryptos: getSupportedCryptos(state.cryptos),
  transactions: state.transactions
})

export default connect(
  mapStateToProps,
  { selectFromAddress, selectToAddress, selectCrypto, enterAmount, emitTransfer }
)(YAEEContainer)
