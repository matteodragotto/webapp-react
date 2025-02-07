import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"


const moviesList = () => {

  const { fetchMovies } = useGlobalContext()

  useEffect(fetchMovies, [])

  return (
    <div>moviesList</div>
  )
}

export default moviesList