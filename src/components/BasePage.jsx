var React = require('react');
var NavBar = require('./nav/NavBar.jsx');

var navLinks = [{title: "Simple Wallet", href: "/simplewallet"}];

var BasePage = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar navData={navLinks} />
        {this.props.children}
      </div>
    );
  }
});

module.exports = BasePage;
