// @flow
import * as React from 'react'
import styled from '@emotion/styled'

import type {Direction, Coordinates} from './core'
import {North, East, South, West} from './core'
import {DirectionError} from './direction-error'

type Props = {
  active: boolean,
  direction: Direction,
}

function Cell({active, direction, ...props}: Props) {
  const [endX, endY] = getEndCoordinates(direction)

  return (
    <svg {...props} viewBox="0 0 100 100">
      <Rect x="5" y="5" width="90" height="90" rx="15" ry="15" />
      {active && <Circle cx="50" cy="50" r="40" />}
      {active && <Line x1="50" y1="50" x2={endX} y2={endY} />}
    </svg>
  )
}

export {Cell}

function getEndCoordinates(direction: Direction): Coordinates {
  switch (direction) {
    case North:
      return [50, 10]
    case East:
      return [90, 50]
    case South:
      return [50, 90]
    case West:
      return [10, 50]
    default:
      throw new DirectionError(direction)
  }
}

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
