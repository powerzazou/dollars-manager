// Auth
export const LOGIN = '@@DOLLARSMANAGER/AUTH_LOGIN'
export function login (roomName, password) {
  return {type: LOGIN, roomName, password}
}

// Users
export const ADD_USER = '@@DOLLARSMANAGER/USERS_ADD_USER'
export const UPDATE_USER = '@@DOLLARSMANAGER/USERS_UPDATE_USER'
export function addUser (name, roomId, maxBudget = 0, currentBudget = 0) {
  return { type: ADD_USER, name, roomId, maxBudget, currentBudget }
}
export function updateUser (id, name, roomId, maxBudget = 0, currentBudget = 0) {
  return { type: ADD_USER, id, name, roomId, maxBudget, currentBudget }
}
