import React from 'react'
import { Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='text-center'>
      <h6>Pagina no encontrada</h6>
      <Link to="/Logins" >iniciar seccion</Link>
    </div>

  )
}

export default NotFound
