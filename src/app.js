// @flow
import * as React from 'react'
import styled from 'styled-components'

import {Controls} from './controls'
// import {TextView as GameView} from './text-view'
import {HtmlView as GameView} from './html-view'
import {turnCW, turnCCW, canStepForward, stepForward} from './logic'

const worldDimensions = [5, 5]

function App() {
  const [direction, setDirection] = React.useState('east')
  const [location, setXY] = React.useState([3, 3])

  const turnRight = () => {
    setDirection(turnCW(direction))
  }

  const turnLeft = () => {
    setDirection(turnCCW(direction))
  }

  const moveForward = () => {
    setXY(stepForward(location, direction))
  }

  const canMove = canStepForward(worldDimensions, location, direction)

  return (
    <Root>
      <GameView
        dimensions={worldDimensions}
        location={location}
        direction={direction}
      />
      <Controls
        turnRight={turnRight}
        turnLeft={turnLeft}
        move={canMove ? moveForward : undefined}
      />
    </Root>
  )
}

export default App

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: white;
  font-size: calc(10px + 2vmin);
  background-color: #282c34;
`
