import { injectGlobal } from 'emotion'
import normalize from './normalize'
import globals from './globals'

// Inject global CSS styles
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
injectGlobal`
  ${normalize}
  ${globals}
`
