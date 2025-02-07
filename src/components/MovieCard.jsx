import { Link } from "react-router-dom"

const MovieCard = (movie) => {
  return (
    <div className="card m-3">
      <img src={movie.image} alt={movie.title} />
      <div className="card-body">
        <h5>{movie.title}</h5>
        <Link className="btn btn-primary" to={`/recensioni-film/${movie.id}`}>Vedi le recensioni</Link>
      </div>
    </div>
  )
}

export default MovieCard