// @flow
import * as React from 'react'

import {Button} from './button'

type Props = {
  rotateLeft: () => void,
  rotateRight: () => void,
  move?: () => void,
}

function Controls({rotateLeft, rotateRight, move}: Props) {
  return (
    <div>
      <Button onClick={rotateLeft}>left</Button>
      <Button onClick={rotateRight}>right</Button>
      &emsp;
      <Button onClick={move} disabled={move == null} primary>
        step forward
      </Button>
    </div>
  )
}

export {Controls}
