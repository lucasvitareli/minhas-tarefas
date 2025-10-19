import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/task'

// Defining the filter state
type filterState = {
  term: string
  criteria: 'priority' | 'statys' | 'title' | 'all'
  value?: enums.Priority | enums.Status | ''
}

const initialState: filterState = {
  term: '',
  criteria: 'all'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    }
  }
})

export const { changeTerm } = filterSlice.actions
export default filterSlice.reducer
