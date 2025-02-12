import StarReviews from "./StarReviews"
import axios from "axios"
import { useGlobalContext } from "../context/GlobalContext"
import { useParams } from "react-router-dom"


const ReviewsRender = ({ review }) => {

  const { fetchReviews } = useGlobalContext()

  const apiUrl = import.meta.env.VITE_API_URL
  const { id } = useParams()

  const likesHandler = (reviewId) => {
    axios.patch(`${apiUrl}/reviews/${reviewId}`, { reviewId })
      .then(res => {
        console.log(res.data);
        fetchReviews(id)

      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  if (!review) {
    return <p className="border">Nessuna recensione disponibile.</p>;
  }

  return <div className="review-card mx-1 border border-success-subtle border-1 rounded p-2">
    <p className="fw-bold">- {review.name}</p>
    <p>{review.text}</p>
    <p className="m-0">{StarReviews(review.vote)}</p>
    <p className="mt-3 mb-0"><i className="fa-solid fa-heart" onClick={() => likesHandler(review.id)}></i> {review.likes}</p>
  </div>

}

export default ReviewsRender