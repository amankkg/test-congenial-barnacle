// @flow
import type {ComponentType} from 'react'
import styled from '@emotion/styled'

type Props = {
  disabled?: boolean,
  primary?: boolean,
}

const Button: ComponentType<Props> = styled.button`
  min-width: 17vh;
  margin: 0.25em;
  padding: 0.25em;
  color: ${getColor};
  font-size: 1em;
  background: none;
  border: 2px solid ${getColor};
  border-radius: 5px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: 0.85;

  &:hover {
    opacity: 1;
  }

  &:active {
    transform: scale(1.1);
  }
`

export {Button}

function getColor({disabled, primary, theme}) {
  if (disabled) return theme.disabled
  if (primary) return theme.primary

  return theme.foreground
}
