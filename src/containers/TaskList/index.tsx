import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { Container } from './styles'

import { RootReducer } from '../../store'

const TaskList = () => {
  const { items } = useSelector((state: RootReducer) => state.tasks)
  return (
    <Container>
      <p>2 tasks marked as: &quot;category&quot; and &quot;term&quot; </p>
      <ul>
        {items.map((t) => (
          <li key={t.title}>
            <Task
              id={t.id}
              title={t.title}
              priority={t.priority}
              status={t.status}
              description={t.description}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default TaskList
