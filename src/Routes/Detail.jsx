import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Detail.css'

//! LIGHT & DARK THEME!!
const Detail = () => {

  const { id } = useParams() // obtengo el id del dentista, el cual es pasado por parametro dinamico en la url

  const [dentistaSelected, setDentistaSelected] = useState({}) // aca guardo la data del dentista

  useEffect(() => {
    // Fetch the dentist data from the API based on the id
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`) // fetch data del dentista
      .then(res => res.json()) // convierte la respuesta a json
      .then(dentista => setDentistaSelected(dentista)) //* setea el dentista seleccionado

  }, [id]);

  return (
    <>
      <div className="cardDetail">
        <img src="../../public/images/doctor.jpg" className="imgDocDetail" />
        <h1>Nombre: {dentistaSelected.name}</h1>
        <p>Email: {dentistaSelected.email}</p>
        <p>Phone: {dentistaSelected.phone}</p>
        <p>Website: {dentistaSelected.website}</p>

      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail;