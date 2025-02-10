import { useState } from "react"
import StarReviews from "./StarReviews"

const ReviewsRender = ({ review }) => {

  const [likes, setLikes] = useState(review.likes || 0)

  const likedReviews = { ...review, likes }

  const likesHandler = () => {
    setLikes(likes + 1)
  }

  if (!review) {
    return <p className="border">Nessuna recensione disponibile.</p>;
  }

  return <>
    <p className="fw-bold">- {likedReviews.name}</p>
    <p>{likedReviews.text}</p>
    <p className="m-0">{StarReviews(likedReviews.vote)}</p>
    <p><i className="fa-solid fa-heart" onClick={likesHandler}></i>   {likedReviews.likes}</p>
  </>

}

export default ReviewsRender