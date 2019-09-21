import React from 'react'

function TextGame({X, Y, x, y, face, turnRight, turnLeft, move}) {
  const canGoForward = canIGoThisDirection({x: X, y: Y}, {x,y}, face)

  return <>
    <p>
      <small>on map of </small>
      <strong>{X}x{Y}</strong>
      <small> you're at </small>
      <strong>{x}x{y}</strong>
      <small> and facing </small>
      <strong>{face}</strong>
    </p>
    <button onClick={turnLeft}>turn left</button>
    <button onClick={turnRight}>turn right</button>
    <button onClick={move} disabled={!canGoForward}>step forward</button>
  </>
}

export {TextGame}

function canIGoThisDirection(/* size */ {x:X,y:Y}, /* location */ {x,y}, direction) {
  switch (direction) {
    case 'north': return y !== 1
    case 'east': return x !== X
    case 'south': return y !== Y
    case 'west': return x !== 1
    default: throw new Error('unknown direction')
  }
}