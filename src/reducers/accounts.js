import { combineReducers } from 'redux'
import deepfreeze from 'deep-freeze'
import expect from 'expect'
import * as types from '../constants/ActionTypes'

const accounts = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_ACCOUNT:
      return {
        ...state,
        accounts: action.accounts
      }
    default:
      return state
  }
}

const byAddress = (state = {}, action) => {
  switch (action.type) {
    case types.RECEIVE_ACCOUNTS:
      return {
        ...state,
        ...action.accounts.reduce((obj, account) => {
          obj[account.address] = account
          return obj
        }, {})
      }
      default:
        const { accountAddress } = action
        if (accountAddress) {
          return {
            ...state,
            [accountAddress]: accounts(state[accountAddress], action)
          }
        }
        return state
  }
}

const allAccounts = (state = [], action) => {
  switch (action.type) {
    case types.RECEIVE_ACCOUNTS:
      return action.accounts.map(account => account.address)
    default:
      return state
  }
}

export default combineReducers({
  byAddress,
  allAccounts
})

export const getAccount = (state, address) =>
  state.byAddress[address]

export const getAllAccounts = state =>
  state.allAccounts.map(address => getAccount(state, address))


const testAccounts = () => {
  const stateBefore = [];
  const action = {
    type: types.RECEIVE_ACCOUNTS,
    accounts: [
      { address: 'abc', balance: 100}
    ]
  }
  const stateAfter = {
      abc: { address: 'abc', balance: 100}
  };

  deepfreeze(stateBefore);
  deepfreeze(action);
  // expect(
  //   accounts(stateBefore, action)
  // ).toEqual(stateAfter);

  expect(
    byAddress(stateBefore, action)
  ).toEqual(stateAfter);
};

testAccounts();
console.log('All tests passed');
