// @flow
import * as React from 'react'
import styled from '@emotion/styled'

import type {Direction, Dimensions, Coordinates} from './core'
import {Cell} from './html-cell'

type Props = {
  dimensions: Dimensions,
  location: Coordinates,
  direction: Direction,
}

function HtmlView({dimensions, location, direction}: Props) {
  const [X, Y] = dimensions
  const [x, y] = location

  const rowsArray = React.useMemo(() => Array.from({length: Y}), [Y])
  const cellsArray = React.useMemo(() => Array.from({length: X}), [X])

  return (
    <Root>
      {rowsArray.map((_, row) => (
        <Row key={row}>
          {cellsArray.map((_, cell) => (
            <Cell
              key={cell}
              width="10vh"
              height="10vh"
              active={x === cell && y === row}
              direction={direction}
            />
          ))}
        </Row>
      ))}
    </Root>
  )
}

export {HtmlView}

const Root = styled.div`
  margin: 0;
  padding: 5px 5px 0;
  border: solid 3px ${props => props.theme.foreground};
  border-radius: 10px;
`

const Row = styled.div`
  display: block;
`
