import React from 'react'
import ReactDOM from 'react-dom'
import {ThemeProvider} from 'emotion-theming'

import App from './app'
import {theme} from './styling'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const appNode = (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )

  ReactDOM.render(appNode, div)
  ReactDOM.unmountComponentAtNode(div)
})
