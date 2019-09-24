import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';
import {Controls} from './controls'
import {HtmlView} from './html-view'
import { rightFrom, leftFrom, nextStep, canIGoThisDirection } from './logic';

const worldDimensions = {x: 5, y: 5}

function App() {
  const [direction, setDirection] = useState('north')
  const [location, setXY] = useState({x: 1, y: 1})

  const turnRight = () => {setDirection(rightFrom(direction))}
  const turnLeft = () => {setDirection(leftFrom(direction))}
  const moveForward = () => {setXY(nextStep(location, direction))}
  const canMoveForward = canIGoThisDirection(worldDimensions, location, direction)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Game</h1>
        <HtmlView dimensions={worldDimensions} location={location} direction={direction} />
        <Controls turnRight={turnRight} turnLeft={turnLeft} move={canMoveForward ? moveForward : undefined} />
      </header>
    </div>
  );
}

export default App;
