import * as React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Store } from 'redux'
import { History } from 'history'
import { ThemeProvider } from 'emotion-theming'

import Routes from './routes'
import { ApplicationState } from './store'
import * as themes from './styles/theme'

// Interface for properties passed to the main component
interface Props {
  /** Store for the Redux store provider */
  store: Store<ApplicationState>
  /** History object for React-Router provider */
  history: History
  /** The theme name for the theme provider */
  theme: string
}

const Main: React.FC<Props> = ({ store, history, theme }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={themes[theme]}>
          <Routes />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  )
}

export default Main
