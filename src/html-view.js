// @flow
import * as React from 'react'
import styled from 'styled-components'

import type {Direction, Dimensions, Coordinates} from './types.d'
import {Cell} from './html-cell'
import {nTimes} from './utils'

const Root = styled.div`
  margin: 0;
  padding: 5px 5px 0;
  border: solid 3px royalblue;
  border-radius: 10px;
`

const Row = styled.div`
  display: block;
`

type Props = {
  dimensions: Dimensions,
  location: Coordinates,
  direction: Direction,
}

function HtmlView({dimensions, location, direction}: Props) {
  const [X, Y] = dimensions
  const [x, y] = location

  const rowsArray = React.useMemo(() => nTimes(Y), [Y])
  const cellsArray = React.useMemo(() => nTimes(X), [X])

  return (
    <Root>
      {rowsArray.map(row => (
        <Row key={row}>{cellsArray.map(cell => (
          <Cell key={cell} active={x === cell && y === row} direction={direction} />
        ))}</Row>
      ))}
    </Root>
  )
}

export {HtmlView}
