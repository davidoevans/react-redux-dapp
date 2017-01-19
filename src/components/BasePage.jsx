var React = require('react');
var NavBar = require('./nav/NavBar.jsx');

var navLinks = [{title: "Simple Wallet", href: "/simplewallet"},
  {title: "MetaCoin", href: "/metacoin"}];

var BasePage = React.createClass({
  render: function() {
    return (
      <div className="container">
        <NavBar navData={navLinks} />
        {this.props.children}
      </div>
    );
  }
});

module.exports = BasePage;
