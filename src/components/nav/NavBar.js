import React, { Component } from 'react';
import NavItem from './NavItem';
import { Link } from 'react-router';

export default class NavBar extends Component {

  render() {

    const navStyle = {
      WebkitBoxShadow: "0 0 4px rgba(0,0,0,0.4)",
      MozBoxShadow: "0 0 4px rgba(0,0,0,0.4)",
      boxShadow: "0 0 4px rgba(0,0,0,0.4)",
      borderRadius: 0
    };

    const createLinkItem = (item, index) => {
      return <NavItem key={item.title + index} href={item.href} title={item.title} />
    };

    return (
      <div>
        <nav style={navStyle} className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">react-dapp</Link>
            </div>
            <div className="collapse navbar-collapse" id="nav-collapse">
              <ul className="nav navbar-nav">{this.props.navData.map(createLinkItem)} </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
