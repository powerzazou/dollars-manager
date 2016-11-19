import { connect } from 'react-redux'
import React, { Component } from 'react'
import LoginScreen from './LoginScreen'
import DashboardScreen from './DashboardScreen'
import { loggedIn } from '../store'

export class HomeScreen extends Component {
  render () {
    return loggedIn() ? <DashboardScreen /> : <LoginScreen />
  }
}

const mapStateToProps = ({ currentRoom }) => ({ currentRoom })

export default connect(mapStateToProps)(HomeScreen)
