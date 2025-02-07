import { useEffect } from "react"
import { useGlobalContext } from "../context/GlobalContext"
import { useParams, Link } from "react-router-dom"


const MoviePage = () => {

  const { fetchReviews, reviews, movie } = useGlobalContext()
  const { id } = useParams()

  const renderReviews = () => {
    if (!reviews || reviews.length === 0) {
      return <p>Nessuna recensione disponibile.</p>;
    }

    return reviews.map((review) => <p key={review.id}>{review.text}</p>);
  }

  useEffect(() => fetchReviews(id), [id])

  return (
    <div className="container my-5 d-flex">
      <img src={movie.image} alt={movie.title} />
      <div className="p-4">
        <h1>{movie.title}</h1>
        <p>{movie.director}</p>
        <p>{movie.genre}</p>
        <p>{movie.release_year}</p>
        <div className="reviews">
          <h2>Recensioni</h2>
          {renderReviews()}
        </div>
        <Link className="btn btn-primary" to={'/'}>Vedi le recensioni</Link>
      </div>




    </div>
  )
}

export default MoviePage