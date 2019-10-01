// @flow
import {DirectionError} from './direction-error'

export type Dimensions = [number, number]
export type Coordinates = [number, number]

function rotate(from, times) {
  const to = Math.abs(from + 4 + (times % 4)) % 4

  const {[to]: result} = {
    0: new North(),
    1: new East(),
    2: new South(),
    3: new West(),
  }

  return result

  switch (to) {
    case 0:
      return new North()
    case 1:
      return new East()
    case 2:
      return new South()
    case 3:
      return new West()
    default:
      throw new DirectionError()
  }
}

class CardinalDirection {
  constructor() {
    // $FlowFixMe
    switch (new.target) {
      case North:
      case East:
      case South:
      case West:
        return this
      default:
        throw new DirectionError()
    }
  }

  rotate(times: number): CardinalDirection {
    switch (this.constructor) {
      case North:
        return rotate(0, times)
      case East:
        return rotate(1, times)
      case South:
        return rotate(2, times)
      case West:
        return rotate(3, times)
      default:
        throw new DirectionError()
    }
  }

  move([x, y]: Coordinates): Coordinates {
    switch (this.constructor) {
      case North:
        return [x, y - 1]
      case East:
        return [x + 1, y]
      case South:
        return [x, y + 1]
      case West:
        return [x - 1, y]
      default:
        throw new DirectionError()
    }
  }

  canMove([X, Y]: Dimensions, [x, y]: Coordinates) {
    switch (this.constructor) {
      case North:
        return y !== 0
      case East:
        return x !== X - 1
      case South:
        return y !== Y - 1
      case West:
        return x !== 0
      default:
        throw new DirectionError()
    }
  }

  toString() {
    return this.constructor.name
  }
}

export class North extends CardinalDirection {}
export class East extends CardinalDirection {}
export class South extends CardinalDirection {}
export class West extends CardinalDirection {}

export type Direction = CardinalDirection
