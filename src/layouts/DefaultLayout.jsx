import { Outlet, Link } from "react-router-dom"

const DefaultLayout = () => {
  return (
    <>
      <header className="d-flex justify-content-between">
        <div className="logo">
          <a href="/"><img src="../img/boolmovies.png" alt="boolmovies" /></a>
        </div>
        <Link className="btn mx-5" to={`/movies/create`}>Aggiungi un film</Link>
      </header>
      <main className="container my-5">
        <Outlet />
      </main>

      <footer></footer>
    </>
  )
}

export default DefaultLayout