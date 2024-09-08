import React from 'react'
import {Link} from 'react-router-dom'
import bobnot from '../img/bobnot.jpg'

const NotFound = () => {
  return (
    <div className='text-center not'>
      <img src={bobnot}/>
      <h6>Pagina no encontrada</h6>
      <Link to="/Logins" ><button className='btn btn-danger' >Iniciar seccion</button></Link>
   
    </div>

  )
}

export default NotFound
