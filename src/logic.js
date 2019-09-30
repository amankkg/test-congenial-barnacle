// @flow
import type {Direction, Dimensions, Coordinates} from './types.d'

type DirectionMap = Map<Direction, Direction>

const cwShiftMap: DirectionMap = new Map([
  ['north', 'east'],
  ['east', 'south'],
  ['south', 'west'],
  ['west', 'north'],
])

export function turnCW(direction: Direction) {
  return cwShiftMap.get(direction)
}

const ccwShiftMap: DirectionMap = new Map([
  ['north', 'west'],
  ['east', 'north'],
  ['south', 'east'],
  ['west', 'south'],
])

export function turnCCW(direction: Direction) {
  return ccwShiftMap.get(direction)
}

// this function can be curried
// canStepForward :: dimensions -> location -> direction -> true|false
// canStepForward :: dimensions -> (location, direction) -> true|false
export function canStepForward(dimensions: Dimensions, location: Coordinates, direction: Direction): boolean {
  const [X, Y] = dimensions
  const [x, y] = location

  switch (direction) {
    case 'north':
      return y !== 1
    case 'east':
      return x !== X
    case 'south':
      return y !== Y
    case 'west':
      return x !== 1
  default: throw new Error('unknown direction')
  }
}

export function stepForward(location: Coordinates, direction: Direction): Coordinates {
  const [x, y] = location

  switch (direction) {
    case 'north':
      return [x, y - 1]
    case 'east':
      return [x + 1, y]
    case 'south':
      return [x, y + 1]
    case 'west':
      return [x - 1, y]
  default: throw new Error('unknown direction')
  }
}
