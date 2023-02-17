import axios, { Axios } from 'axios'
import React, { useState } from 'react'
import '../styles/pages/contact.css'
import dotenv from "dotenv"

const Contact = () => {
  const initialForm = {
    firstname: '',
    lastname: '',
    email: '',
    text: '',
  }

  const [sending, setSending] = useState(false)
  const [msg, setMsg] = useState('')
  const [formData, setFormData] = useState(initialForm)

  // useEffect(() => {
  // }, [])

  const handleChange = (e) => {
    // const { firstname, value } = e.target
    // setFormData((oldData) => ({
    //   ...oldData,
    //   [firstname]: value,
    // }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMsg('')
    setSending(true)
    const env = dotenv.config().parsed;
    // const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData)
    const response = await axios.post(`http://localhost:3000/api/contacto`, formData)
    setSending(false)
    setMsg(response.data.message)
    if (response.data.error === false) {
      setFormData(initialForm)
    }
  }

  return (
    <div>
      <main className="main">
        <form action="/contacto" method="post" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstname">Nombre</label>
            <input
              name="firstname"
              type="text"
              id="firstname"
              // value={formData.firstname}
              // onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastname">Apellido</label>

            <input
              name="lastname"
              type="text"
              id="lastname"
              // value={formData.lastname}
              // onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              id="email"
              // value={formData.email}
              // onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="textarea">Consulta</label>
          </div>
          <textarea
            className="textarea"
            name="text"
            id="textarea"
            cols="30"
            rows="10"
            placeholder="Agregue aqui su consulta"
            // value={formData.text}
            // onChange={handleChange}
          ></textarea>

          <div>
            <button type="submit">Enviar Consulta</button>
          </div>
        </form>
        {sending ? <p>Enviando ...</p> : null}

        {msg ? <p>{msg}</p> : null}

        <section className="main__bottom-fish"></section>
      </main>
    </div>
  )
}

export default Contact
