import { LOGIN } from '../action-creators.js'
import sha1 from 'sha1'

export default function login (state, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        currentRoom: state.rooms.reduce((acc, room) => {
          const {roomName, password} = action
          const {name: currentRoomName, password: expectedPassword} = room
          return (currentRoomName === roomName && expectedPassword === sha1(roomName + password)) ? room : null
        }, null)
      }
    default:
      return state
  }
}
