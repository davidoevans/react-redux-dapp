# Welcome to react-dapp
A React app created, ejected and modified to be a Truffle Dapp

# INSTALL
TODO - make this an npm install command

This is the documentation associated with the reac-dapp project.

Why this course?
The Ethereum platform with it's Solidity smart contracting language is making Dapps a growing industry.  The world of web development is moving fast and a web developer needs to be taking advantage of the latest developments.  From my experience, JQuery did awesome things for the maturing Javascript development, AngularJS provided a solid, extensible framework but took a little too long to get to the 2.x version, which saw many web developers turn toward ReactJS.

You won't find me on Facebook.  But the web technology contributions of Facebook have me full respect.

For those with a keen interest in developing rich Dapps, the project developed in this course will provide a localized development environment to enable that.

This course is a walk through of the journey I took to establish an environment for developing Ethereum Dapps using Truffle, web3, Solidity, ReactJS and Reflux.


Pre-requisites

- Some knowledge of Javascript
- (NodeJS)[https://nodejs.org/en/download/current/] should be installed.  I just use the latest which as of this writing is v7.4.0 with npm 4.0.5 included.
- The (Atom)[https://atom.io/] editor has these packages to make a nice environment for Solidity Smart Contract development.
    - atom-ethereum-interface
    - language-ethereum
- Insall these globally:
    - (Truffle)[http://truffleframework.com/] -> `npm install -g truffle`
    - (ethereumjs/testrpc)[https://github.com/ethereumjs/testrpc] -> `npm install -g ethereumjs-testrpc`
    - (create-react-app)[https://github.com/facebookincubator/create-react-app] -> `npm install -g create-react-app`
If you'd like to download the latest react-dapp project `git clone https://github.com/davidoevans/react-dapp.git`

Install [uport-lib](https://github.com/ConsenSys/uport-lib) -> `npm install "git://github.com/ConsenSys/uport-lib.git#develop" --save`


Conventions Used - regardless, JSX is compiled to Javascript by Babel
* The ES6 `import` is used over `require`
* `getInitialState` is used am using `React.createClass`.  If using ES6 form,
would use `constructor` instead.
* [good noes from zapier](https://zapier.com/engineering/react-js-tutorial-guide-gotchas/)
Course Outline


- Creating a React Application
- Add Bootstrap to inherit some style
- Install ethereumjs-testrpc
- Creating a Truffle Application
- Creating a React-Truffle Application
- Enable ReactRouting
- Deploying Contracts to testrpc
- Interacting with Contracts using web3 via truffle console
- Creating react-dapp
    - Interacting with Contracts using web3 via react application
    - Introducing Reflux for managing your web3 console
    - 'React'ive updates from web3 watch filters

Credits

- Jordan Leigh and ?? for making it real with their Introduction to Ethereum Smart Contract Development with Solidity videos.  This is where I first heard of create-react-app and got introduced to Truffle started grasping web3 and just how pervasive NodeJS is in the Ethereum Dapp ecosystem.
- Mark Price for his React and Flux Web Development course on Udemy.  Mark is an excellent explainer of core concepts of web development and covers the foundations of React, Reflux, Bootstrap grid system and much more to provide a grounded understanding of React.
- Ravinder Diol and Thomas Wiesner for their Ethereum Developer: Building A Decentralised Blockchain Application course on Udemy.  He talks walks through building an Angular 1.x environment.
