// @flow
import * as React from 'react'
import styled from '@emotion/styled'

import type {Direction, Coordinates} from './types.d'

type Props = {
  active: boolean,
  direction: Direction,
}

function Cell({active, direction}: Props) {
  const endCoordinates = directionCoordinatesMap.get(direction)

  if (endCoordinates === undefined)
    throw new Error('direction is unhandled or unknown')

  const [x2, y2] = endCoordinates
  const title = active ? 'cell with unit' : 'empty cell'

  return (
    <svg width="100" height="100">
      <title>{title}</title>
      <Rect x="5" y="5" width="90" height="90" rx="15" ry="15" />
      {active && <Circle cx="50" cy="50" r="40" />}
      {active && <Line x1="50" y1="50" x2={x2} y2={y2} />}
    </svg>
  )
}

export {Cell}

const directionCoordinatesMap: Map<Direction, Coordinates> = new Map([
  ['north', [50, 10]],
  ['east', [90, 50]],
  ['south', [50, 90]],
  ['west', [10, 50]],
])

const Rect = styled.rect`
  fill: none;
  stroke: ${props => props.theme.foreground};
  stroke-width: 2;
`

const Circle = styled.circle`
  fill: ${props => props.theme.unit};
`

const Line = styled.line`
  stroke: ${props => props.theme.background};
  stroke-width: 3;
`
