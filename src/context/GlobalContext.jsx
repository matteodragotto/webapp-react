import axios from "axios"
import { createContext, useContext, useState } from "react"


const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

  const apiUrl = 'http://localhost:3000/movies'

  const [movies, setMovies] = useState([])

  const fetchMovies = () => {
    axios.get(apiUrl)
      .then(res => {
        setMovies(res.data);
      })
  }

  const value = {
    fetchMovies,
    movies
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