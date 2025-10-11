// importing every component from styles as S
import { useState } from 'react'
import * as S from './styles'

type Props = {
  title?: string
  priority?: string
  status?: string
  description?: string
}

const Task = ({ description, priority, status, title }: Props) => {
  const [editing, setEditing] = useState(false)
  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag priority={priority}>{priority}</S.Tag>
      <S.Tag status={status}>{status}</S.Tag>
      <S.Description value={description} />
      <S.ActionBar>
        {editing ? (
          <>
            <S.ButtonSave>Save</S.ButtonSave>
            <S.ButtonCancelDelete onClick={() => setEditing(false)}>
              Cancel
            </S.ButtonCancelDelete>
          </>
        ) : (
          <>
            <S.Button onClick={() => setEditing(true)}>Edit</S.Button>
            <S.ButtonCancelDelete>Delete</S.ButtonCancelDelete>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
