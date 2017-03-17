import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getAllAccounts } from '../reducers/accounts'
import { getSupportedCryptos } from '../reducers/cryptos'
import { selectFromAddress, selectToAddress, selectCrypto, enterAmount, emitTransfer } from '../actions'
import AddressDropdown from '../components/AddressDropdown'
import CryptoDropdown from '../components/CryptoDropdown'
import AmountInput from '../components/AmountInput'
import AccountTable from '../components/AccountTable'

const EthereumContainer = ({ accounts, cryptos, selectFromAddress, selectToAddress, selectCrypto, enterAmount, emitTransfer }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3><b>Ethereum</b> Example React-Redux Truffle Dapp</h3>
          </div>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-sm-8">
              <form className="form-horizontal">
                <AddressDropdown label="From" accounts={accounts} action={selectFromAddress} />
                <AddressDropdown label="To" accounts={accounts} action={selectToAddress} />
                <CryptoDropdown label="Crypto" cryptos={cryptos} action={selectCrypto} />
                <AmountInput label="Amount" action={enterAmount} />
              </form>
              <button type="submit" className="btn btn-primary" onClick={() => emitTransfer()}>Transfer</button>
            </div>
            <div className="col-sm-4">
                <div className="row">
                  <div className="col-xs-12 col-md-3 col-lg-3 pull-left">
                    <div className="panel panel-default height">
                      <div className="panel-heading">Billing Details</div>
                      <div className="panel-body">
                          <strong>David Peere:</strong><br/>
                          <strong>22 203</strong><br/>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
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
  cryptos: getSupportedCryptos(state.cryptos)
})

export default connect(
  mapStateToProps,
  { selectFromAddress, selectToAddress, selectCrypto, enterAmount, emitTransfer }
)(EthereumContainer)
