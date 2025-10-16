// importing every component from styles as S
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import * as enums from '../../utils/enums/task'

// importing the remove action from tasks reducer
import { remove } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'

type Props = TaskClass

const Task = ({ description, priority, status, title, id }: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag priority={priority} params="priority">
        {priority}
      </S.Tag>
      <S.Tag status={status} params="status">
        {status}
      </S.Tag>
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
            <S.ButtonCancelDelete onClick={() => dispatch(remove(id))}>
              Delete
            </S.ButtonCancelDelete>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
