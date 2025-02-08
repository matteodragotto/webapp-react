import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
  return (
    <>
      <header className="d-flex">
        <div className="logo">
          <a href="/"><img src="../public/img/boolmovies.png" alt="" /></a>
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