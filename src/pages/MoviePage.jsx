import { useEffect, useState } from "react"
import { useGlobalContext } from "../context/GlobalContext"
import { useParams, Link, useNavigate } from "react-router-dom"
import AddReview from "../components/AddReview"
import ReviewsRender from "../components/ReviewsRender"


const MoviePage = () => {

  const { fetchReviews, reviews, movie } = useGlobalContext()
  const { id } = useParams()
  const redirect = useNavigate()

  const printReviews = () => {

    if (!reviews || reviews.length === 0) {
      return <p className="border">Nessuna recensione disponibile.</p>;
    }

    return reviews.map(review => (
      <div key={review.id} className="border border-success-subtle border-2 rounded p-2 mb-2">
        <ReviewsRender review={review} />
      </div>
    ))
  }

  useEffect(() => fetchReviews(id, () => redirect('/404')), [id, reviews.length])

  return (
    <div className="container my-5">
      <div className="d-flex mb-3">
        <img className="full-image" src={movie.image} alt={movie.title} />
        <div className="container mx-3 text-center">

          <h2><span className="fw-semibold">Titolo: </span> {movie.title}</h2>
          <p><span className="fw-semibold">Regista: </span> {movie.director}</p>
          <p><span className="fw-semibold">Genere: </span>{movie.genre}</p>
          <p><span className="fw-semibold">Anno di uscita: </span>{movie.release_year}</p>
          <span className="fw-semibold">Riassunto:</span>
          <p>{movie.abstract}</p>
          <Link className="btn btn-primary" to={'/'}>Torna indietro</Link>
        </div>
      </div>
      <div className="reviews w-50">
        <h2 className="text-center">Recensioni</h2>
        {printReviews()}


        <div className="border border-success-subtle border-2 rounded p-2 mb-2">
          <h2>Aggiungi la tua recensione</h2>
          {AddReview(movie.id)}
        </div>

      </div>





    </div >
  )
}

export default MoviePage