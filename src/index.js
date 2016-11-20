import getMuiTheme from 'material-ui/styles/getMuiTheme'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory as history } from 'react-router'
// import { install as installOfflineHandling } from 'offline-plugin/runtime'
import store, { loggedIn } from './store'
import UserExpensesScreen from './containers/UserExpensesScreen'

// DEV NOTE: only required until Material UI 0.16+, as it won't use
// `onTouchTap` unduly anymore.
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

// installOfflineHandling()

import App from './components/app'
import HomeScreen from './containers/HomeScreen'

function requireAuth (nextState, replace) {
  if (!loggedIn()) {
    replace('/')
  }
}

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={history}>
        <Route path='/' component={App}>
          <IndexRoute component={HomeScreen} />
          <Route path='expenses/:id' component={UserExpensesScreen} onEnter={requireAuth} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)

/* render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={history}>
        <Route path='/' component={App}>
          <IndexRoute component={HomeScreen} />
          <Route path='settings' component={SettingsScreen} onEnter={requireAuth} />
          <Route path='history' component={HistoryScreen} onEnter={requireAuth} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
) */

if (module.hot) {
  module.hot.accept()
}
