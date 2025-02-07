import axios from "axios"
import { createContext, useContext, useState } from "react"


const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

  const apiUrl = 'http://localhost:3000'

  const fetchMovies = () => {
    axios.get(apiUrl)
      .then(res => {
        console.log(res.data);

      })
  }

  const value = {
    fetchMovies
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