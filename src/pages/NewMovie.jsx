import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const NewMovie = () => {
  const apiUrl = import.meta.env.VITE_API_URL
  const navigate = useNavigate()

  const initialFormData = {
    title: '',
    director: '',
    genre: '',
    release_year: '',
    abstract: '',
    image: null
  }

  const [formData, setFormData] = useState(initialFormData)
  const [thumbnail, setThumbnail] = useState('https://placehold.co/300x200?text=Placeholder+Image&font=roboto')

  const changeHandler = (e) => {
    const { value, name } = e.target

    if (name === "image") {
      setThumbnail(URL.createObjectURL(e.target.files[0]))
      setFormData({ ...formData, image: e.target.files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }

  }

  const submitHandler = (e) => {
    e.preventDefault()

    const dataToSend = new FormData();

    for (let key in formData) {
      dataToSend.append(key, formData[key])
    }

    axios.post(apiUrl, dataToSend, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(() => navigate('/'))
      .catch((err) => console.log(err))
  }

  return (
    <div className="container my-5 text-center">
      <form action='#' onSubmit={submitHandler}>
        <div className="form-group">
          <label>Titolo</label>
          <input
            type="text"
            className="form-control my-3"
            name="title"
            value={formData.title}
            placeholder="Inserisci il titolo"
            onChange={changeHandler}
          />
        </div>
        <label>Regista</label>
        <div className="form-group">
          <input
            type="text"
            className="form-control my-3"
            name="director"
            value={formData.director}
            placeholder="Inserisci il regista"
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label>Genere</label>
          <input
            type="text"
            className="form-control my-3"
            name="genre"
            placeholder="Inserisci il genere"
            value={formData.genre}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label>Anno di uscita</label>
          <input
            type="text"
            className="form-control my-3"
            name="release_year"
            value={formData.release_year}
            placeholder="Inserisci l'anno di uscita"
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label>Riassunto</label>
          <input
            type="text"
            className="form-control my-3"
            name="abstract"
            value={formData.abstract}
            placeholder="Inserisci il riassunto"
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            className="form-control my-3"
            name="image"
            onChange={changeHandler}
          />
          <img src={thumbnail} alt="preview" />

        </div>
        <button className="btn btn-light my-3" type="submit">Pubblica il film</button>

      </form>
    </div>
  )
}

export default NewMovie