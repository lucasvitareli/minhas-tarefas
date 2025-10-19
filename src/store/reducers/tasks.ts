import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/task'

type TaskState = {
  items: Task[]
}

const initialState: TaskState = {
  items: [
    {
      id: 1,
      title: 'Study TypeScript',
      priority: enums.Priority.IMPORTANT,
      status: enums.Status.PENDING,
      description: 'Watch videos and do exercises'
    },
    {
      id: 2,
      title: 'Read book',
      priority: enums.Priority.NORMAL,
      status: enums.Status.PENDING,
      description: 'Read 30 pages of my book'
    },
    {
      id: 3,
      title: 'Gym',
      priority: enums.Priority.NORMAL,
      status: enums.Status.DONE,
      description: 'Leg day at the gym'
    },
    {
      id: 4,
      title: 'Call the bank',
      priority: enums.Priority.URGENT,
      status: enums.Status.PENDING,
      description: 'Ask about the new credit card'
    }
  ]
}

// Create Slice is a function that accepts an initial state, an object full of reducer functions, and a slice name
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // we create the remove action that will receive the id of the task to be removed
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((task) => task.id !== action.payload)
    },
    // we create the edit action and then, we find the task to be edited
    edit: (state, action: PayloadAction<Task>) => {
      const indexTask = state.items.findIndex((t) => t.id === action.payload.id)

      if (indexTask >= 0) {
        state.items[indexTask] = action.payload
      }
    }
  }
})

export const { remove, edit } = taskSlice.actions

export default taskSlice.reducer
