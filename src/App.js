import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {TextGame} from './text-game'

function App() {
  const [direction, setDirection] = useState('north')
  const [xy, setXY] = useState({x: 1, y: 2})

  const turnRight = () => {setDirection(rightFrom[direction])}
  const turnLeft = () => {setDirection(leftFrom[direction])}
  const moveForward = () => {setXY(nextStep(xy, direction))}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>text game:</h1>
        <TextGame
          X={5} Y={5}
          x={xy.x} y={xy.y} face={direction}
          turnRight={turnRight} turnLeft={turnLeft} move={moveForward}
        />
      </header>
    </div>
  );
}

export default App;

const rightFrom = {
  north: 'east',
  east: 'south',
  south: 'west',
  west: 'north',
}

const leftFrom = {
  north: 'west',
  east: 'north',
  south: 'east',
  west: 'south',
}

function nextStep(/* location */ {x,y}, direction) {
  switch (direction) {
    case 'north': return {x, y: y - 1}
    case 'east': return {x: x + 1, y}
    case 'south': return {x, y: y + 1}
    case 'west': return {x: x - 1, y}
    default: throw new Error('unknown direction')
  }
}