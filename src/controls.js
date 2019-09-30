// @flow
import * as React from 'react'

import {Button} from './button'

type Props = {
  turnLeft: () => void,
  turnRight: () => void,
  move?: () => void,
}

function Controls({turnLeft, turnRight, move, ...props}: Props) {
  const leftText = 'turn left'
  const rightText = 'turn right'
  const moveText = 'step forward'

  return (
    <div {...props}>
      <Button onClick={turnLeft} title={leftText}>
        {leftText}
      </Button>
      &nbsp;
      <Button onClick={turnRight} title={rightText}>
        {rightText}
      </Button>
      &emsp;
      <Button onClick={move} disabled={move == null} title={moveText} primary>
        {moveText}
      </Button>
    </div>
  )
}

export {Controls}
