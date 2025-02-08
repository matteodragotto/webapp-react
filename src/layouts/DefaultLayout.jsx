import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
  return (
    <>
      <header>
        <a href="/"><h1>BoolMovies</h1></a>
      </header>
      <main className="container my-5">
        <Outlet />
      </main>

      <footer></footer>
    </>
  )
}

export default DefaultLayout