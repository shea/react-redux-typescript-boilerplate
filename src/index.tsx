import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createHashHistory } from 'history'

import Main from './main'
import configureStore from './configureStore'

// Import the styles module to inject the global CSS styles
// eslint-disable-next-line import/no-unassigned-import
import './styles'

// We use hash history because this example is going to be hosted statically.
// Normally you would use browser history.
const history = createHashHistory()

const initialState = window.initialReduxState
const store = configureStore(history, initialState)
const theme = 'light'

// Render the root React node
ReactDOM.render(
  <Main store={store} history={history} theme={theme} />,
  document.querySelector('#root')
)
