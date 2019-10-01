// @flow
export class DirectionError extends Error {
  name = 'DirectionError'

  constructor(value?: number | string = '') {
    super(`Direction ${value} is unknown or unhandled`)
  }
}
