

const StarReviews = (vote) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= vote) {
      stars.push(<i key={i} className="fa-solid fa-star" style={{ color: "#00DF6B", }}></i>)
    } else {
      stars.push(<i key={i} className="fa-regular fa-star"></i>)
    }
  }
  return stars
}

export default StarReviews