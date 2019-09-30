// @flow
import * as React from 'react'
import styled from 'styled-components'

type Props = {
  turnLeft: () => void,
  turnRight: () => void,
  move?: () => void,
}

function Controls({turnLeft, turnRight, move}: Props) {
  return (
    <div>
      <Button onClick={turnLeft} color="royalblue">
        turn left
      </Button>
      &nbsp;
      <Button onClick={turnRight} color="royalblue">
        turn right
      </Button>
      &emsp;
      <Button onClick={move} disabled={move == null} color="mediumseagreen">
        step forward
      </Button>
    </div>
  )
}

export {Controls}

const Button = styled.button`
  margin: 1em;
  padding: 0.25em 1em;
  color: ${properties => (properties.disabled ? 'gray' : properties.color)};
  font-size: 1em;
  background: none;
  border: 2px solid
    ${properties => (properties.disabled ? 'gray' : properties.color)};
  border-radius: 3px;
  cursor: ${properties => (properties.disabled ? 'not-allowed' : 'pointer')};
`
