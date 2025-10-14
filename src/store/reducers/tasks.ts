import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/task'
import { act } from 'react'

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [
    new Task(
      'Study TypeScript',
      enums.Priority.IMPORTANT,
      enums.Status.PENDING,
      'Watch videos and do exercises',
      1
    ),
    new Task(
      'Read book',
      enums.Priority.NORMAL,
      enums.Status.PENDING,
      'Read 30 pages of my book',
      2
    ),
    new Task(
      'Gym',
      enums.Priority.URGENT,
      enums.Status.DONE,
      'Leg day at the gym',
      3
    )
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.filter((task: Task) => task.id !== action.payload)
    }
  }
})

export const { remove } = taskSlice.actions

export default taskSlice.reducer
