// @flow
import * as React from 'react'

import type {Direction, Dimensions, Location} from './types.d'

type Props = {
  dimensions: Dimensions,
  location: Location,
  direction: Direction,
}

function TextView({dimensions, location, direction}: Props) {
  const [X, Y] = dimensions
  const [x, y] = location

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
      <code>{direction}</code>
    </p>
  )
}

export {TextView}
