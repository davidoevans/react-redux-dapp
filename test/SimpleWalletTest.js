contract('SimpleWallet', function(accounts) {
  it('the owner is allowed to send funds', function() {
    var wallet = SimpleWallet.deployed()
    return wallet.isAllowedToSend.call(accounts[0]).then(function(isAllowed) {
      assert.equal(isAllowed, true, 'the owner should have been allowed to send funds');
    })
  });

  it('the other account should not be allowed to send funds', function() {
    var wallet = SimpleWallet.deployed();
    return wallet.isAllowedToSend.call(accounts[2]).then(function(isAllowed) {
      assert.equal(isAllowed, false, 'the other account was allowed');
    })
  });

  it('adding accounts to the allowed list', function() {
    var wallet = SimpleWallet.deployed();

    return wallet.isAllowedToSend.call(accounts[1]).then(function(isAllowed) {
      assert.equal(isAllowed, false, 'the other account was allowed');
    }).then(function() {
      return wallet.allowAddressToSendMoney(accounts[1]);
    }).then(function() {
      return wallet.isAllowedToSend.call(accounts[1]);
    }).then(function(isAllowed) {
      assert.equal(isAllowed, true, 'the other account was not allowed');
    }).then(function() {
      return wallet.disallowAddressToSendMoney(accounts[1]);
    }).then(function() {
      return wallet.isAllowedToSend.call(accounts[1]);
    }).then(function(isAllowed) {
      assert.equal(isAllowed, false, 'the account was allowed');
    })
  });

  it('should check Deposit events', function(done) {
      var wallet = SimpleWallet.deployed();

      var event = wallet.allEvents();
      event.watch(function(error, result) {
        if (error) {
          console.err(error);
        } else {
          // now we'll check that the events are correctly
          assert.equal(result.event, "Deposit");
          assert.equal(web3.fromWei(result.args.amount.valueOf(), 'ether'), 1);
          assert.equal(result.args._sender.valueOf(), web3.eth.accounts[0]);
          event.stopWatching();
          done();
        }
      });
      // send ether
      web3.eth.sendTransaction({from: web3.eth.accounts[0], to: wallet.address, value: web3.toWei(1, 'ether')});
    });

    it('should check not allowed Deposit events', function(done) {
      var wallet = SimpleWallet.deployed();

      // send ether
      web3.eth.sendTransaction({from: web3.eth.accounts[1], to: wallet.address, value: web3.toWei(1, 'ether')}, function(error, result) {
        if (error) {
          done();
        } else {
          done(result);
        }
      });

    });

});
