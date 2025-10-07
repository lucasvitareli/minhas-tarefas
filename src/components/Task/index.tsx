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
      <S.Tag>{priority}</S.Tag>
      <S.Tag>{status}</S.Tag>
      <S.Description value={description} />
      <S.ActionBar>
        {editing ? (
          <>
            <S.Button>Save</S.Button>
            <S.Button onClick={() => setEditing(false)}>Cancel</S.Button>
          </>
        ) : (
          <>
            <S.Button onClick={() => setEditing(true)}>Edit</S.Button>
            <S.Button>Delete</S.Button>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
