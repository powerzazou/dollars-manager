import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Card, CardText, CardTitle } from 'material-ui/Card'
import DocumentTitle from 'react-document-title'
import ExpenseWidget from '../components/ExpenseWidget'

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
  getCurrentUserExpenses () {
    const {currentRoomId, expenses} = this.props
    const currentUserId = this.getCurrentUser().id
    return expenses.filter((expense) => {
      return (expense.roomId === currentRoomId && expense.userId === currentUserId) ? true : false
    })
  }
  render () {
    const currentRoom = this.getCurrentRoom()
    const currentUser = this.getCurrentUser()
    const title = currentRoom.prettyName + ': ' + currentUser.name
    return (
      <DocumentTitle title={title}>
        <div>
          <Card className='dashboard'>
            <CardTitle title={currentUser.name} subtitle='Detail des dépenses' />
            <CardText>
              {
                this.getCurrentUserExpenses().map((expense) => {
                  return <ExpenseWidget key={expense.id} expense={expense}/>
                })
              }
              {
                this.getCurrentUserExpenses().length === 0 && <p>Aucune dépense à afficher</p>
              }
            </CardText>
          </Card>
        </div>
      </DocumentTitle>
    )
  }
}

const mapStateToProps = ({ currentRoomId, users, rooms, expenses }) => ({ currentRoomId, users, rooms, expenses })
export default connect(mapStateToProps)(UserExpensesScreen)
