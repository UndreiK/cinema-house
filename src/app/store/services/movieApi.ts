// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Movie } from '../../../shared/types'
// import type { Pokemon } from './types'

const BASE_URL = import.meta.env.VITE_KINOPOISK_BASE_API_URL
const API_KEY = import.meta.env.VITE_KINOPOISK_API_KEY

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMoviesByName: builder.query<Movie, string>({
      query: (params) => {
        return {
          url: 'movie/search',
          params: { api_key: API_KEY, query: params },
          headers: { accept: 'application/json', 'X-API-KEY': API_KEY },
        }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMoviesByNameQuery } = moviesApi
