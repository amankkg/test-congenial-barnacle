// @flow
import * as React from 'react'
import styled from '@emotion/styled'

import {Controls} from './controls'
// import {TextView as GameView} from './text-view'
import {HtmlView as GameView} from './html-view'
import {rotate, stepForward, canStepForward} from './core'

const {useState, useCallback} = React
const dimensions = [5, 5]

function App() {
  const [location, setXY] = useState([2, 2])
  const [direction, setDirection] = useState(1)

  const move = useCallback(() => setXY(stepForward(direction)), [direction])
  const rotateCW = useCallback(() => setDirection(rotate(1)), [])
  const rotateCCW = useCallback(() => setDirection(rotate(-1)), [])
  const canMove = canStepForward(dimensions, location, direction)

  return (
    <Root>
      <GameView
        dimensions={dimensions}
        location={location}
        direction={direction}
      />
      <Controls
        rotateRight={rotateCW}
        rotateLeft={rotateCCW}
        move={canMove ? move : undefined}
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
  font-size: calc(10px + 2vmin);
  background-color: ${props => props.theme.background};

  & > * {
    margin-top: 2vh;
  }
`
