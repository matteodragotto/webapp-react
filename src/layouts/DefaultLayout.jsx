import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
  return (
    <>
      <header className="container my-5">
        <h1>Bool-Movies</h1>
      </header>
      <main className="container my-5">
        <Outlet />
      </main>

      <footer></footer>
    </>
  )
}

export default DefaultLayout