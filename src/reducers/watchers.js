import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

const watch = (state = {}, action) => {
  switch (action.type) {
    case types.WATCH:
      console.log(`reducer: WATCH ${action.watch}`)
      return {
        ...state,
        watch: action.watch
      }
      default:
        return state
    }
  }

  export default combineReducers({
    watch
  })
