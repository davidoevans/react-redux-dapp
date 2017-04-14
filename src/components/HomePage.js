var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

class HomePage extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Welcome to react-dapp.</h1>
        <p>If you are wondering how you got here,
          see <Link to="https://github.com/davidoevans/react-redux-dapp">react-redux-dapp</Link>
        </p>
      </div>
    );
  }
};

export default HomePage;
