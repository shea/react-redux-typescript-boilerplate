import { injectGlobal } from 'emotion'
import normalize from './normalize'
import globals from './globals'

injectGlobal`
  ${normalize}
  ${globals}
`
