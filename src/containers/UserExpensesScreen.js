import { connect } from 'react-redux'
import React, { Component } from 'react'
// import { Card, CardText, CardTitle } from 'material-ui/Card'
import DocumentTitle from 'react-document-title'
// import UserWidget from '../components/UserWidget'

class UserExpensesScreen extends Component {
  getCurrentRoom () {
    const {currentRoomId, rooms} = this.props
    return rooms.reduce((acc, room) => {
      return (room.id === currentRoomId) ? room : acc
    }, null)
  }
  getCurrentUser () {
    const {currentRoomId, users, params: { id: currentUserId }} = this.props
    return users.reduce((acc, user) => {
      return (user.roomId === currentRoomId && Number(user.id) === Number(currentUserId)) ? user : acc
    }, null)
  }
  render () {
    const currentUser = this.getCurrentUser()
    return (
      <DocumentTitle title='PROUT'>
        <div>
          <h1>SOON</h1>
          <p>{this.getCurrentUser().name}</p>
        </div>
      </DocumentTitle>
    )
  }
}

const mapStateToProps = ({ currentRoomId, users, rooms }) => ({ currentRoomId, users, rooms })
export default connect(mapStateToProps)(UserExpensesScreen)
