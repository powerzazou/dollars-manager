import autobind from 'autobind-decorator'
import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward'
import { Card, CardActions, CardText, CardTitle } from 'material-ui/Card'
import Snackbar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import '../styles/LoginScreen.styl'
import { connect } from 'react-redux'
import { login } from '../action-creators'

export class LoginScreen extends Component {
  constructor () {
    super()
    this.state = {hasTriedToLogin: false}
  }
  @autobind
  login (event) {
    event.preventDefault()
    this.setState({hasTriedToLogin: true})
    this.props.dispatch(login(this.userRoom, this.password))
  }

  render () {
    return (
      <DocumentTitle title='Identifiez-vous'>
        <form onSubmit={this.login}>
          <Card className='loginScreen'>
            <CardTitle title='Dollars Manager' subtitle='Connexion' />
            <CardText>
              <TextField
                type='text'
                onChange={(event) => { this.userRoom = event.target.value }}
                hintText='nouvelAn2015'
                floatingLabelText='Room'
                autoFocus
                required
              /><br />
              <TextField
                type='password'
                onChange={(event) => { this.password = event.target.value }}
                hintText='Jlmkpoetx42'
                floatingLabelText='Mot de passe'
                required
              />
            </CardText>
            <CardActions style={{ textAlign: 'center' }}>
              <RaisedButton label='Connecte-toi' labelPosition='before' primary
                icon={<ArrowForward />} type='submit'
              />
            </CardActions>
          </Card>
          <Snackbar message="La room indiquée n'existe pas ou le mot de passe est incorrect" open={this.state.hasTriedToLogin} />
        </form>
      </DocumentTitle>
    )
  }
}

export default connect()(LoginScreen)
