import React from 'react';
import { Connect } from 'uport-connect'

class UPortView extends React.Component {
  constructor() {
    super()
    this.state = { valid: true }
  }

  componentWillMount () {
    // let uport = new Connect('TEST92184091284091284')
    let uport = new Connect('0x5b1cb74ca2e26fb60e4ce5e6e934f25351f04bf0')
    let web3 = uport.getWeb3()

    this.getCoinbase = function () {
      web3.eth.getCoinbase(function (err, address) {
        if (err) { throw err }
        console.log('address: ' + address)
        web3.eth.defaultAccount = address

        // uport.fetchCredentials().then((profile) => {
        //   let profile = userPersona.profile
        //   console.log(profile)
        // })
      })
    }
  }

  componentDidMount () {
    this.getCoinbase()
  }

  render() {
    var formClass = this.state.valid ? "form-group" : "form-group has-error";

    return (
      <div className={formClass}>
        <label className="col-sm-3 control-label">{this.props.label}</label>
        <div className="col-sm-9">
            <input className="form-control" onChange={this.handleChange} onBlur={(e) => this.props.action(e.target.value)} />
        </div>
      </div>
    );

  }
}

export default UPortView
