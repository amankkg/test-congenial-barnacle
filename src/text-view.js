// @flow
import * as React from 'react'

function TextView({dimensions, location, direction}) {
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
