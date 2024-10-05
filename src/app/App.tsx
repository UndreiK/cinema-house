import './styles/App.css'
import { useGetMoviesByNameQuery } from './store/services/movieApi'
import HomePage from '../pages/home/ui/HomePage'

function App() {
  // const movies = useAppSelector((state) => state.movies.movies)

  // console.log(movies)

  const { data } = useGetMoviesByNameQuery('avengers')

  console.log(data)

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
