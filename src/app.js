// @flow
import * as React from 'react'
import styled from '@emotion/styled'

import {Controls} from './controls'
// import {TextView as GameView} from './text-view'
import {HtmlView as GameView} from './html-view'
import {turnCW, turnCCW, canStepForward, stepForward} from './logic'

function App() {
  const [direction, setDirection] = React.useState('east')
  const [location, setXY] = React.useState([2, 2])

  const turnRight = () => setDirection(turnCW(direction))
  const turnLeft = () => setDirection(turnCCW(direction))
  const moveForward = () => setXY(stepForward(location, direction))

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

const worldDimensions = [5, 5]

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  background-color: ${props => props.theme.background};
`
