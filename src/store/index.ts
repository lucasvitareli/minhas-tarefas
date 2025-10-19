import { configureStore } from '@reduxjs/toolkit'

import tasksReducer from './reducers/tasks'
import filterReducer from './reducers/filter'

// Configuring the store with the reducers from tasks and filter
const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
