// styles for the FilterCard component
import styled from 'styled-components'
/* Importing the Props type from the index file */
import { Props } from '.'

// Creating a new type, excluding counter and text from Props
type PropsExclude = Omit<Props, 'counter' | 'text'>

export const Card = styled.div<PropsExclude>`
  padding: 8px;
  border: 1px solid ${(props) => (props.active ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.active ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.active ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
`

export const Counter = styled.span`
  display: block;
  font-weight: bold;
  font-size: 24px;
`

export const Label = styled.span`
  font-size: 14px;
`
