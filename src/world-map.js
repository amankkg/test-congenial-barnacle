import React from 'react'

function WorldMap({dimensions, location, direction}) {
  return (
    <p>
      <small>On map of </small>
      <strong>{dimensions.x}x{dimensions.y}</strong>
      <small> you're at </small>
      <strong>{location.x}x{location.y}</strong>
      <small> and facing </small>
      <strong>{direction}</strong>
    </p>
  )
}

export {WorldMap}