import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
  return (
    <>
      <header>
        <h1>BoolMovies</h1>
      </header>
      <main className="container my-5">
        <Outlet />
      </main>

      <footer></footer>
    </>
  )
}

export default DefaultLayout