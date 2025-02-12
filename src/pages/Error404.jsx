import { Link } from "react-router-dom"

const Error404 = () => {
  return (
    <div className='container my-5 text-center'>
      <img src="../img/error404.png" alt="error404" />
      <Link className="btn btn-light my-5" to={'/'}>Torna alla pagina principale</Link>
    </div>
  )
}

export default Error404