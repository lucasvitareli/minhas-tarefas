import Task from '../../components/Task'
import { Container } from './styles'
import * as enums from '../../utils/enums/task'

const tasks = [
  {
    title: 'Study Typescript',
    priority: enums.Priority.URGENT,
    status: enums.Status.PENDING,
    description: 'Watch videos and do exercises'
  },
  {
    title: 'Read book',
    priority: enums.Priority.NORMAL,
    status: enums.Status.PENDING,
    description: 'Read 30 pages of my book'
  },
  {
    title: 'Gym',
    priority: enums.Priority.IMPORTANT,
    status: enums.Status.DONE,
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
