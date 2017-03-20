import React from 'react'

class AmountInput extends React.Component {
  constructor() {
    super()
    this.state = { valid: true }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    var numbers = /^[0-9]+$/;

    if (!e.target.value.match(numbers)) {
      this.setState({valid: false});
    } else {
      this.setState({valid: true});
    }
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

export default AmountInput
