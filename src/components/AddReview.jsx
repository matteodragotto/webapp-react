import { useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"


const AddReview = () => {
  const apiUrl = import.meta.env.VITE_API_URL
  const { id } = useParams()
  const { fetchReviews } = useGlobalContext()

  const initialFormData = {
    movie_id: id,
    name: '',
    text: '',
    vote: '',
  }

  const [formData, setFormData] = useState(initialFormData)

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()

    axios.post(`${apiUrl}/${id}`, formData, { headers: { 'Content-Type': 'application/json' } })
      .then(res => {
        console.log(res.data);
        setFormData(initialFormData)
        fetchReviews(id)

      })
      .catch(err => {
        console.log(err);

      })
  }

  return (
    <form action='#' onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control my-3"
          name="name"
          value={formData.name}
          placeholder="Inserisci il tuo nome"
          onChange={changeHandler}
        />
      </div>
      <div className="form-group">
        <textarea
          type="text"
          className="form-control my-3"
          name="text"
          value={formData.text}
          placeholder="Scrivi la recensione"
          onChange={changeHandler}
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control my-3"
          name="vote"
          placeholder="Inserisci un voto da 1 a 5"
          min={1}
          max={5}
          value={formData.vote}
          onChange={changeHandler}
        />
      </div>
      <button className="btn btn-light" type="submit">Pubblica recensione</button>

    </form>

  )
}

export default AddReview