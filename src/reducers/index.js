import { combineReducers } from 'redux'
import { LOGIN } from '../action-creators'
import login from './login'
import users from './users'

const coreReducer = combineReducers({
  users
})

export default function dollarsManagerReducer (state = coreReducer(undefined, {}), action) {
  switch (action.type) {
    case LOGIN:
      return login(state, action)
    default:
      return coreReducer(state, action)
  }
}
