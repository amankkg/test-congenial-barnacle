// @flow
import * as React from 'react'

import type {Direction, Dimensions, Coordinates} from './core'
import {directionToString} from './core'

type Props = {
  dimensions: Dimensions,
  location: Coordinates,
  direction: Direction,
}

function TextView({dimensions: [X, Y], location: [x, y], direction}: Props) {
  return (
    <p>
      <small>on map of </small>
      <code>
        {X}x{Y}
      </code>
      <small> you're at </small>
      <code>
        {x}x{y}
      </code>
      <small> and facing </small>
      <code>{directionToString(direction)}</code>
    </p>
  )
}

export {TextView}
