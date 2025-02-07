import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./context/GlobalContext"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout} >
            <Route path="/" Component={HomePage} />
            <Route path="/recensioni-film/:id" Component={MoviePage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>

  )
}

export default App