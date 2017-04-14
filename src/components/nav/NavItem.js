import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavItem extends Component {
  constructor() {
    super()
    this.state = {hover: false}
    this.mouseOver = this.mouseOver.bind(this)
    this.mouseOut = this.mouseOut.bind(this)
  }

  mouseOver(e) {
    this.setState({hover: true})
  }

  mouseOut(e) {
    this.setState({hover: false})
  }

  render() {
    return (
      <li className={this.state.hover ? "active" : ""} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <Link style={this.props.aStyle} to={this.props.href}>{this.props.title}</Link>
      </li>
    );
  }
}
