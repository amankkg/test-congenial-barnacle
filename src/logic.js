export function turnCW(direction) {
  switch (direction) {
    case 'north': return 'east'
    case 'east': return 'south'
    case 'south': return 'west'
    case 'west': return 'north'
    default: throw new Error('unknown direction')
  }
}

export function turnCCW(direction) {
  switch (direction) {
    case 'north': return 'west'
    case 'east': return 'north'
    case 'south': return 'east'
    case 'west': return 'south'
    default: throw new Error('unknown direction')
  }
}

// TODO: this function can be curried
// canStepForward :: dimensions -> location -> direction -> true|false
// canStepForward :: dimensions -> (location, direction) -> true|false
export function canStepForward(dimensions, location, direction) {
  const [X, Y] = dimensions
  const [x, y] = location

  switch (direction) {
    case 'north': return y !== 1
    case 'east': return x !== X
    case 'south': return y !== Y
    case 'west': return x !== 1
    default: throw new Error('unknown direction')
  }
}

export function stepForward(location, direction) {
  const [x, y] = location

  switch (direction) {
    case 'north': return [x, y - 1]
    case 'east': return [x + 1, y]
    case 'south': return [x, y + 1]
    case 'west': return [x - 1, y]
    default: throw new Error('unknown direction')
  }
}
