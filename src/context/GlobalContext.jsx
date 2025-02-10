import axios from "axios"
import { createContext, useContext, useState } from "react"


const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

  const apiUrl = import.meta.env.VITE_API_URL

  const [movies, setMovies] = useState([])
  const [reviews, setReviews] = useState([])
  const [movie, setMovie] = useState({})

  const fetchMovies = () => {
    axios.get(apiUrl)
      .then(res => {
        setMovies(res.data);
      })
  }

  const fetchReviews = (id) => {
    axios.get(`${apiUrl}/${id}`)
      .then(res => {
        console.log(res.data.reviews);
        setReviews(res.data.reviews)
        setMovie(res.data)

      })
  }

  const value = {
    fetchMovies,
    movies,
    fetchReviews,
    reviews,
    movie
  }

  return (
    <GlobalContext.Provider value={value} >
      {children}
    </GlobalContext.Provider >
  )
}


const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }