import { Link } from "react-router-dom"
import StarReviews from "./StarReviews"


const MovieCard = (movie) => {
  return (
    <div className="card m-3">
      <img src={movie.image} alt={movie.title} />
      <div className="card-body">
        <p><span className="fw-semibold fs-5">Titolo: </span> {movie.title}</p>
        <p><span className="fw-semibold">Genere: </span>{movie.genre}</p>
        <p>{StarReviews(movie.media_voti)}</p>
        <Link className="btn btn-light" to={`/recensioni-film/${movie.id}`}>Vedi le recensioni</Link>

      </div>
    </div>
  )
}

export default MovieCard