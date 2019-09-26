import React from 'react'
import styled from 'styled-components'

function Controls({turnLeft, turnRight, move}) {
  return (
    <div>
      <Button onClick={turnLeft} color="royalblue">turn left</Button>
      &nbsp;
      <Button onClick={turnRight} color="royalblue">turn right</Button>
      &emsp;
      <Button onClick={move} disabled={move == null} color="mediumseagreen">step forward</Button>
    </div>
  )
}

export {Controls}

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background: none;
  color: ${props => props.disabled ? 'gray' : props.color};
  border: 2px solid ${props => props.disabled ? 'gray' : props.color};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`
