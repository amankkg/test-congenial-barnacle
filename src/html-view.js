import React from 'react'

function HtmlView({dimensions, location, direction}) {
  const [X, Y] = dimensions
  const [x, y] = location

  return (
    <p>
      <small>On map of </small>
      <strong>{X}x{Y}</strong>
      <small> you're at </small>
      <strong>{x}x{y}</strong>
      <small> and facing </small>
      <strong>{direction}</strong>
    </p>
  )
}

export {HtmlView}