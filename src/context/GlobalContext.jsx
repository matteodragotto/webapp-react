import axios from "axios"
import { createContext, useContext, useState } from "react"


const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

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