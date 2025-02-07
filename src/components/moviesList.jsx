import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"


const MoviesList = () => {

  const { fetchMovies, movies } = useGlobalContext()

  useEffect(fetchMovies, [])

  const renderMovies = () => {
    return movies.map(movie => (
      <div className="col-4" key={movie.id}>
        <div className="card">
          <img src={movie.image} alt={movie.title} />
          <div className="card-body">
            <h5>{movie.title}</h5>
          </div>
        </div>
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