import { ADD_USER, UPDATE_USER } from '../action-creators'

export default function users (state = [], action) {
  switch (action.type) {
    case ADD_USER:
      return state
    case UPDATE_USER:
      return state
    default:
      return state
  }
}
