// import { combineReducers } from 'redux'
import { LOGIN } from '../action-creators'
import login from './login'

export default function dollarsManagerReducer (state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return login(state, action)
    default:
      return state
  }
}
