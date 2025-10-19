// importing every component from styles as S
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import * as enums from '../../utils/enums/task'

// importing the remove action from tasks reducer
import { remove, edit } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'

type Props = TaskClass

const Task = ({
  description: inicialDescription,
  priority,
  status,
  title,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [description, setDescription] = useState('')

  // useEffect is used to set the initial value of the component
  useEffect(() => {
    if (inicialDescription.length > 0) {
      setDescription(inicialDescription)
    }
  }, [inicialDescription])

  function cancelEditing() {
    setEditing(false)
    setDescription(inicialDescription)
  }

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag priority={priority} params="priority">
        {priority}
      </S.Tag>
      <S.Tag status={status} params="status">
        {status}
      </S.Tag>
      <S.Description
        disabled={!editing}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <S.ActionBar>
        {editing ? (
          <>
            <S.ButtonSave
              onClick={() => {
                dispatch(
                  edit({
                    description,
                    id,
                    priority,
                    status,
                    title
                  })
                )
                setEditing(false)
              }}
            >
              Save
            </S.ButtonSave>
            <S.ButtonCancelDelete onClick={cancelEditing}>
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
