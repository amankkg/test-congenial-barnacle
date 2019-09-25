import React, {useState} from 'react';

import './App.css';
import {Controls} from './controls'
import {HtmlView} from './html-view'
import {turnCW, turnCCW, canStepForward, stepForward} from './logic';

const worldDimensions = [5, 5]

function App() {
  const [direction, setDirection] = useState('north')
  const [location, setXY] = useState([1, 1])

  const turnRight = () => {setDirection(turnCW(direction))}
  const turnLeft = () => {setDirection(turnCCW(direction))}
  const moveForward = () => {setXY(stepForward(location, direction))}

  const canMoveForward = canStepForward(worldDimensions, location, direction)

  return (
    <div className="App">
      <header className="App-header">
        <HtmlView dimensions={worldDimensions} location={location} direction={direction} />
        <Controls turnRight={turnRight} turnLeft={turnLeft} move={canMoveForward ? moveForward : undefined} />
      </header>
    </div>
  );
}

export default App;
