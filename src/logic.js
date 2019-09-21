export const directionMap = {
  north: 'North',
  east: 'East',
  south: 'South',
  west: 'West'
}

const rightFromMap = {
  north: 'east',
  east: 'south',
  south: 'west',
  west: 'north',
}

export function rightFrom(direction) {
  return rightFromMap[direction]
}

const leftFromMap = {
  north: 'west',
  east: 'north',
  south: 'east',
  west: 'south',
}

export function leftFrom(direction) {
  return leftFromMap[direction]
}

export function nextStep(/* location */ {x,y}, direction) {
  switch (direction) {
    case 'north': return {x, y: y - 1}
    case 'east': return {x: x + 1, y}
    case 'south': return {x, y: y + 1}
    case 'west': return {x: x - 1, y}
    default: throw new Error('unknown direction')
  }
}

// TODO: curry like this `canGoForward :: Dimensions -> Location -> Direction -> Bool`
export function canIGoThisDirection(/* dimensions */ {x:X,y:Y}, /* location */ {x,y}, direction) {
  switch (direction) {
    case 'north': return y !== 1
    case 'east': return x !== X
    case 'south': return y !== Y
    case 'west': return x !== 1
    default: throw new Error('unknown direction')
  }
}