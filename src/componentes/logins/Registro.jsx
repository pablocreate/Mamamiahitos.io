import React from 'react'
import Formulario from './Formulario'

const Registro = () => {
  return (
   <>
   <h1>Registro</h1>
   <div className='container'>
    <Formulario login={false}/>
   </div>
   </>
  )
}

export default Registro
