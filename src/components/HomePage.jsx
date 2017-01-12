var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var HomePage = React.createClass({
  render: function() {
    return (
      <div className="container">
        <h1>Welcome to react-dapp.</h1>
        <p>If you're wondering how you got here,
          see <Link to="https://github.com/davidoevans/react-dapp">react-dapp</Link>
        </p>
      </div>
    );
  }
});

module.exports = HomePage;
