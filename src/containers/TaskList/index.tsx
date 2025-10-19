import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { Container } from './styles'

import { RootReducer } from '../../store'

// Component to display the list of tasks with filtering functionality
const TaskList = () => {
  const { items } = useSelector((state: RootReducer) => state.tasks)
  const { term } = useSelector((state: RootReducer) => state.filter)

  // Function to filter tasks based on the search term
  const filterTasks = () => {
    return items.filter(
      (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p>2 tasks marked as: &quot;category&quot; and &quot;{term}&quot; </p>
      <ul>
        {filterTasks().map((t) => (
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
