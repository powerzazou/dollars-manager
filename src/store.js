import { createStore } from 'redux'
import dollarsManagerReducer from './reducers'

// 1 : passlemot => sha1(name + pass)

const DEFAULT_STATE = {
  currentRoom: null,
  rooms: [
    {id: 1, name: 'noel2016', password: '95c5d37749039805b860bdec8beee8666ae64a16'}
  ]
}

const enhancer = typeof window !== 'undefined' && window.devToolsExtension
  ? window.devToolsExtension()
  : (x) => x

const store = createStore(dollarsManagerReducer, DEFAULT_STATE, enhancer)

export function loggedIn () {
  return store.getState().currentRoom != null
}

export default store
