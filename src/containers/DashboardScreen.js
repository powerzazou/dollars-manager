import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Card, CardText, CardTitle } from 'material-ui/Card'
import DocumentTitle from 'react-document-title'
import UserWidget from '../components/UserWidget'

class DashboardScreen extends Component {
  render () {
    return (
      <DocumentTitle title='Dashboard'>
        <div>
          <Card className='dashboard'>
            <CardTitle title={this.getCurrentRoom().prettyName} subtitle='Liste des boulets' />
            <CardText>
              {
                this.getCurrentRoomUsers().map((user) => {
                  return <UserWidget key={user.id} user={user} />
                })
              }
            </CardText>
          </Card>
        </div>
      </DocumentTitle>
    )
  }
  getCurrentRoom () {
    const {currentRoomId, rooms} = this.props
    return rooms.reduce((acc, room) => {
      return (room.id === currentRoomId) ? room : acc
    }, null)
  }
  getCurrentRoomUsers () {
    const {currentRoomId, users} = this.props
    return users.filter((user) => { return user.roomId === currentRoomId })
  }
}

const mapStateToProps = ({ currentRoomId, users, rooms }) => ({ currentRoomId, users, rooms })

export default connect(mapStateToProps)(DashboardScreen)
