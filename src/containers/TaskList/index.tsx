import Task from '../../components/Task'
import { Container } from './styles'

const tasks = [
  {
    title: 'Study Typescript',
    priority: 'Urgent',
    status: 'Pending',
    description: 'Watch videos and do exercises'
  },
  {
    title: 'Read book',
    priority: 'Normal',
    status: 'Pending',
    description: 'Read 30 pages of my book'
  },
  {
    title: 'Gym',
    priority: 'Important',
    status: 'Done',
    description: 'Leg day at the gym'
  }
]

const TaskList = () => (
  <Container>
    <p>2 tasks marked as: &quot;category&quot; and &quot;term&quot; </p>
    <ul>
      {tasks.map((t) => (
        <li key={t.title}>
          <Task
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

export default TaskList
