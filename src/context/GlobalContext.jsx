import axios from "axios"
import { createContext, useContext, useState } from "react"



const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

  const apiUrl = import.meta.env.VITE_API_URL

  const [movies, setMovies] = useState([])
  const [reviews, setReviews] = useState([])
  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = () => {
    setIsLoading(true)
    axios.get(apiUrl)
      .then(res => {
        setMovies(res.data);
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false)

      })
  }

  const fetchReviews = (id, redirect) => {
    setIsLoading(true)
    axios.get(`${apiUrl}/${id}`)
      .then(res => {
        console.log(res.data.reviews);
        setReviews(res.data.reviews)
        setMovie(res.data)
        setIsLoading(false)

      })
      .catch(err => {
        console.log(err);
        if (err.status === 404) redirect()
        setIsLoading(false)
      })
  }


  const value = {
    fetchMovies,
    movies,
    fetchReviews,
    reviews,
    movie,
    isLoading
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