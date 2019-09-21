import React from 'react'

function Controls({turnLeft, turnRight, move}) {
  return (
    <div>
      <button onClick={turnLeft}>turn left</button>
      &nbsp;
      <button onClick={turnRight}>turn right</button>
      &emsp;
      <button onClick={move} disabled={move == null}>step forward</button>
    </div>
  )
}

export {Controls}