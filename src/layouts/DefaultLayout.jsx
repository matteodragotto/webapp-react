import { Outlet, Link } from "react-router-dom"

const DefaultLayout = () => {
  return (
    <>
      <header className="d-flex justify-content-between align-items-center">
        <div className="logo">
          <a href="/"><img src="../img/boolmovies.png" alt="boolmovies" /></a>
        </div>
        <div>
          <Link className="btn btn-light px-5 py-2 mx-5" to={`/movies/create`}>Aggiungi un film</Link>
        </div>

      </header>
      <main className="container my-5">
        <Outlet />
      </main>

      <footer></footer>
    </>
  )
}

export default DefaultLayout