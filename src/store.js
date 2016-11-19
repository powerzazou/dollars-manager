import { createStore } from 'redux'
import dollarsManagerReducer from './reducers'

// 1 : passlemot => sha1(name + pass)

const DEFAULT_STATE = {
  currentRoomId: 1,
  rooms: [
    {
      id: 1,
      name: 'noel2016',
      prettyName: 'Noël 2016',
      password: '95c5d37749039805b860bdec8beee8666ae64a16'
    },
    {
      id: 2,
      name: 'ete2016',
      prettyName: 'Belgique 2016',
      password: '95c5d37749039805b860bdec8beee8666ae64a16'
    }
  ],
  users: [
    {
      id: 1,
      name: 'Zazou',
      roomId: 1,
      maxBudget: 150,
      currentBudget: 50
    },
    {
      id: 2,
      name: 'Pavel',
      roomId: 2,
      maxBudget: 200,
      currentBudget: 30
    },
    {
      id: 3,
      name: 'Pavel',
      roomId: 1,
      maxBudget: 150,
      currentBudget: 15
    }
  ]

}

const enhancer = typeof window !== 'undefined' && window.devToolsExtension
  ? window.devToolsExtension()
  : (x) => x

const store = createStore(dollarsManagerReducer, DEFAULT_STATE, enhancer)

export function loggedIn () {
  return store.getState().currentRoomId !== 0
}

export default store
