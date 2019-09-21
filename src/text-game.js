import React from 'react'

import {directionMap, canIGoThisDirection} from './logic'

function TextGame({X, Y, x, y, face, turnRight, turnLeft, move}) {
  const canGoForward = canIGoThisDirection({x: X, y: Y}, {x,y}, face)

  return <>
    <p>
      <small>on map of </small>
      <strong>{X}x{Y}</strong>
      <small> you're at </small>
      <strong>{x}x{y}</strong>
      <small> and facing </small>
      <strong>{directionMap[face]}</strong>
    </p>
    <button onClick={turnLeft}>turn left</button>
    <button onClick={turnRight}>turn right</button>
    <button onClick={move} disabled={!canGoForward}>step forward</button>
  </>
}

export {TextGame}
