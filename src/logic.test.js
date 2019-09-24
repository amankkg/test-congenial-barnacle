import {canIGoThisDirection} from './logic'

describe('canIGoThisDirection', () => {
  it('should return false', () => {
    const dimensions = {x: 3, y: 3}
    const location = {x: 2, y: 3}
    const direction = 'south'

    const response = canIGoThisDirection(dimensions, location, direction)

    expect(response).toBe(false)
  })

  it('should return true', () => {
    const dimensions = {x: 3, y: 3}
    const location = {x: 2, y: 2}
    const direction = 'east'

    const response = canIGoThisDirection(dimensions, location, direction)

    expect(response).toBe(true)
  })
})