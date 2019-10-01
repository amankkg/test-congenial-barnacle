// @flow
import {DirectionError} from './direction-error'

// explicit type annotations are required to define `Direction` precisely
export const North: 0 = 0
export const East: 1 = 1
export const South: 2 = 2
export const West: 3 = 3

export type Direction = typeof North | typeof East | typeof South | typeof West
export type Dimensions = [number, number]
export type Coordinates = [number, number]

type Rotate = number => Direction => Direction
export const rotate: Rotate = times => direction =>
  // $FlowFixMe Here Flow infers return type of `number` which is too broad for `Direction`
  Math.abs(4 + direction + (times % 4)) % 4

type StepForward = Direction => Coordinates => Coordinates
export const stepForward: StepForward = direction => ([x, y]) => {
  switch (direction) {
    case North:
      return [x, y - 1]
    case East:
      return [x + 1, y]
    case South:
      return [x, y + 1]
    case West:
      return [x - 1, y]
    default:
      throw new DirectionError(direction)
  }
}

export function canStepForward(
  [X, Y]: Dimensions,
  [x, y]: Coordinates,
  direction: Direction,
) {
  switch (direction) {
    case North:
      return y !== 0
    case East:
      return x !== X - 1
    case South:
      return y !== Y - 1
    case West:
      return x !== 0
    default:
      throw new DirectionError(direction)
  }
}

export function directionToString(direction: Direction) {
  switch (direction) {
    case North:
      return 'north'
    case East:
      return 'east'
    case South:
      return 'south'
    case West:
      return 'west'
    default:
      throw new DirectionError(direction)
  }
}
