// @flow
import * as React from 'react'
import {render} from 'react-dom'
import {createGlobalStyle, ThemeProvider} from 'styled-components'

import App from './app'
import * as serviceWorker from './service-worker'

const theme = {}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

const root = document.querySelector('#root')

if (root !== null) {
  render(
    <ThemeProvider theme={theme}>
      <>
        <App />
        <GlobalStyle />
      </>
    </ThemeProvider>,
    root,
  )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
