import { injectGlobal } from 'emotion'
import normalize from './normalize'
import globals from './globals'

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
injectGlobal`
  ${normalize}
  ${globals}
`
