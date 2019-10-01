import * as coreDefinitions from './core'

const {North, East, South, West} = coreDefinitions
const {rotate, canStepForward, stepForward} = coreDefinitions

describe('rotate', () => {
  describe('clockwise', () => {
    const turnCW = rotate(1)

    it('should return east for north', () => {
      const actual = turnCW(North)

      expect(actual).toBe(East)
    })

    it('should return south for east', () => {
      const actual = turnCW(East)

      expect(actual).toBe(South)
    })

    it('should return west for south', () => {
      const actual = turnCW(South)

      expect(actual).toBe(West)
    })

    it('should return north for west', () => {
      const actual = turnCW(West)

      expect(actual).toBe(North)
    })

    it('should handle more than 4 rotations correctly', () => {
      const actual = rotate(17)(North)

      expect(actual).toBe(East)
    })
  })

  describe('counter-clockwise', () => {
    const turnCCW = rotate(-1)

    it('should return west for north', () => {
      const actual = turnCCW(North)

      expect(actual).toBe(West)
    })

    it('should return south for west', () => {
      const actual = turnCCW(West)

      expect(actual).toBe(South)
    })

    it('should return east for south', () => {
      const actual = turnCCW(South)

      expect(actual).toBe(East)
    })

    it('should return north for east', () => {
      const actual = turnCCW(East)

      expect(actual).toBe(North)
    })

    it('should handle more than 4 rotations correctly', () => {
      const actual = rotate(-17)(North)

      expect(actual).toBe(West)
    })
  })
})

describe('stepForward', () => {
  describe('should update x-axis:', () => {
    const location = [2, 2]

    it('increment', () => {
      const actual = stepForward(East)(location)

      expect(actual).toEqual([3, 2])
    })

    it('decrement', () => {
      const actual = stepForward(West)(location)

      expect(actual).toEqual([1, 2])
    })
  })

  describe('should update y-axis:', () => {
    const location = [2, 2]

    it('increment', () => {
      const actual = stepForward(South)(location)

      expect(actual).toEqual([2, 3])
    })

    it('increment', () => {
      const actual = stepForward(North)(location)

      expect(actual).toEqual([2, 1])
    })
  })
})

describe('canStepForward', () => {
  it('should return false if location is at the top and direction is north', () => {
    const response = canStepForward([3, 3], [2, 0], North)

    expect(response).toBe(false)
  })

  it('should return true if location is at the top and direction is south', () => {
    const response = canStepForward([3, 3], [2, 1], South)

    expect(response).toBe(true)
  })
})
