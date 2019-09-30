// @flow
import * as React from 'react'

import {Button} from './button'

type Props = {
  turnLeft: () => void,
  turnRight: () => void,
  move?: () => void,
}

function Controls({turnLeft, turnRight, move, ...props}: Props) {
  return (
    <div {...props}>
      <Button onClick={turnLeft} title="Rotate left">
        left
      </Button>
      <Button onClick={turnRight} title="Rotate right">
        right
      </Button>
      &emsp;
      <Button
        onClick={move}
        disabled={move == null}
        title="Move forward"
        primary
      >
        step forward
      </Button>
    </div>
  )
}

export {Controls}
