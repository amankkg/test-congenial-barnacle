import {canStepForward, turnCW, turnCCW, stepForward} from './logic'

describe('turnCW', () => {
  it('should return east for north', () => {
    const actual = turnCW('north')

    expect(actual).toBe('east')
  })

  it('should return south for east', () => {
    const actual = turnCW('east')

    expect(actual).toBe('south')
  })

  it('should return west for south', () => {
    const actual = turnCW('south')

    expect(actual).toBe('west')
  })

  it('should return north for west', () => {
    const actual = turnCW('west')

    expect(actual).toBe('north')
  })
})

describe('turnCCW', () => {
  it('should return west for north', () => {
    const actual = turnCCW('north')

    expect(actual).toBe('west')
  })

  it('should return south for west', () => {
    const actual = turnCCW('west')

    expect(actual).toBe('south')
  })

  it('should return east for south', () => {
    const actual = turnCCW('south')

    expect(actual).toBe('east')
  })

  it('should return north for east', () => {
    const actual = turnCCW('east')

    expect(actual).toBe('north')
  })
})

describe('canStepForward', () => {
  it('should return false if location is at the top and direction is north', () => {
    const response = canStepForward([3, 3], [2, 0], 'north')

    expect(response).toBe(false)
  })

  it('should return true if location is at the top and direction is south', () => {
    const response = canStepForward([3, 3], [2, 1], 'south')

    expect(response).toBe(true)
  })
})

describe('stepForward', () => {
  describe('should update x-axis:', () => {
    const location = [2, 2]

    it('increment', () => {
      const actual = stepForward(location, 'east')

      expect(actual).toEqual([3, 2])
    })

    it('decrement', () => {
      const actual = stepForward(location, 'west')

      expect(actual).toEqual([1, 2])
    })
  })

  describe('should update y-axis:', () => {
    const location = [2, 2]

    it('increment', () => {
      const actual = stepForward(location, 'south')

      expect(actual).toEqual([2, 3])
    })

    it('increment', () => {
      const actual = stepForward(location, 'north')

      expect(actual).toEqual([2, 1])
    })
  })
})
