// styles for Task component
import styled from 'styled-components'
import variables from '../../styles/variables'
import * as enums from '../../utils/enums/task'

// defining types for props
type TagProps = {
  priority?: string
  status?: string
  params: 'priority' | 'status'
}

// function to return background color based on props
function returnBgColor(props: TagProps): string {
  if (props.params === 'status') {
    if (props.status === enums.Status.PENDING) return variables.yellow
    if (props.status === enums.Status.DONE) return variables.green
  } else {
    if (props.priority === enums.Priority.IMPORTANT) return variables.yellow2
    if (props.priority === enums.Priority.URGENT) return variables.red
  }

  return '#ccc'
}

export const Card = styled.div`
  background: #fcfcfc;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  margin-bottom: 16px;
`

// using props in styled-components
export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: 700;
  color: #fff;
  background-color: ${(props) => returnBgColor(props)};
  border-radius: 8px;
  margin-right: 8px;
  display: inline-block;
`

export const Description = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  padding-top: 16px;
`

export const Button = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

// extending styles of Button component
export const ButtonSave = styled(Button)`
  background-color: ${variables.green};
`
export const ButtonCancelDelete = styled(Button)`
  background-color: ${variables.red};
`
