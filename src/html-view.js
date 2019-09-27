// @flow
import * as React from 'react'
import styled from 'styled-components'

function HtmlView({dimensions, location, direction}) {
  const [X, Y] = dimensions
  const [x, y] = location

  // can be memoized
  const rowsArray = toArray(Y)
  const cellsArray = toArray(X)

  const renderCell = row => cell => {
    const key = `${row}:${cell}`
    const active = x === cell && y === row
    const [x2, y2] = getDirectionPoint(direction)

    return (
      <svg key={key} width="100" height="100">
        <rect
          x="5"
          y="5"
          width="90"
          height="90"
          rx="15"
          ry="15"
          fill="none"
          stroke="royalblue"
          strokeWidth="2"
        />
        {active && <circle cx="50" cy="50" r="40" fill="#ffff33" />}
        {active && (
          <line
            x1="50"
            y1="50"
            x2={x2}
            y2={y2}
            stroke="#282c34"
            strokeWidth="3"
          />
        )}
      </svg>
    )
  }

  return (
    <Root>
      {rowsArray.map(row => (
        <Row key={row}>{cellsArray.map(renderCell(row))}</Row>
      ))}
    </Root>
  )
}

export {HtmlView}

const Root = styled.div`
  margin: 0;
  padding: 5px 5px 0;
  border: solid 3px royalblue;
  border-radius: 10px;
`

const Row = styled.div`
  display: block;
`

const toArray = length => Array.from({length}, (_, i) => i + 1)

const getDirectionPoint = direction => {
  switch (direction) {
    case 'north':
      return [50, 10]
    case 'east':
      return [90, 50]
    case 'south':
      return [50, 90]
    case 'west':
      return [10, 50]
    default:
      throw new Error('unknown direction')
  }
}
