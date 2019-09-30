// @flow
import * as React from 'react'

import type {Direction, Coordinates} from './types.d'

const directionCoordinatesMap: Map<Direction, Coordinates> = new Map([
  ['north', [50, 10]],
  ['east', [90, 50]],
  ['south', [50, 90]],
  ['west', [10, 50]],
])

type Props = {
  active: boolean,
  direction: Direction,
}

function Cell({active, direction}: Props) {
  const endCoordinates = directionCoordinatesMap.get(direction)

  if (endCoordinates === undefined) throw new Error('direction is unhandled or unknown')

  const [x2, y2] = endCoordinates

  return (
    <svg width="100" height="100">
      <rect
        x="5"
        y="5"
        width="90"
        height="90"
        rx="15"
        ry="15"
        fill="none"
        stroke="royalblue"
        strokeWidth="2"
      />
      {active && <circle cx="50" cy="50" r="40" fill="#ffff33" />}
      {active && (
        <line
          x1="50"
          y1="50"
          x2={x2}
          y2={y2}
          stroke="#282c34"
          strokeWidth="3"
        />
      )}
    </svg>
  )
}

export {Cell}
