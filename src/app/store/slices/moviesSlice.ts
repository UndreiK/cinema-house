import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Movie } from '../../../shared/types'
// import { RootState } from '../store'

// Define a type for the slice state
interface State {
  movies: Movie[]
}

// Define the initial state using that type
const initialState: State = {
  movies: [],
}

export const moviesSlice = createSlice({
  name: 'movies',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload
    },
  },
})

export const { setMovies } = moviesSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default moviesSlice.reducer
