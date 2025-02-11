import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"
import MovieCard from "./MovieCard"


const MoviesList = () => {

  const { fetchMovies, movies } = useGlobalContext()

  useEffect(fetchMovies, [])

  const renderMovies = () => {
    return movies.map(movie => (
      <div className="col-4 d-flex" key={movie.id}>

        {MovieCard(movie)}
      </div>
    ))
  }

  return (
    <div className="row">
      {renderMovies()}
    </div>
  )
}

export default MoviesList