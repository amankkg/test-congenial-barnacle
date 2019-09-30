// @flow
import * as React from 'react'
import {render} from 'react-dom'
import {Global} from '@emotion/core'
import {ThemeProvider} from 'emotion-theming'

import App from './app'
import {theme, globalStyles} from './styling'

const appNode = (
  <ThemeProvider theme={theme}>
    <>
      <App />
      <Global styles={globalStyles} />
    </>
  </ThemeProvider>
)

const root = document.querySelector('#root')

if (root != null) render(appNode, root)
