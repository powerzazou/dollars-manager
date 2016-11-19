export const LOGIN = '@@DOLLARSMANAGER/AUTH_LOGIN'
export function login (roomName, password) {
  return {type: LOGIN, roomName, password}
}
