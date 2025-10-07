import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filters: {
    company: '',
    jobRole: '',
    cgpa: '',
    ctc: '',
    duration: ''
  },
  sort: {
    field: null,
    direction: 'asc' // 'asc' or 'desc'
  }
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { field, value } = action.payload
      state.filters[field] = value
    },
    clearFilters: (state) => {
      state.filters = initialState.filters
    },
    setSort: (state, action) => {
      const { field } = action.payload
      if (state.sort.field === field) {
        // Toggle direction if same field
        state.sort.direction = state.sort.direction === 'asc' ? 'desc' : 'asc'
      } else {
        // New field, default to ascending
        state.sort.field = field
        state.sort.direction = 'asc'
      }
    }
  }
})

export const { setFilter, clearFilters, setSort } = filterSlice.actions
export default filterSlice.reducer 