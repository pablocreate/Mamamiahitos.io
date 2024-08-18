import React from 'react'
import Tarjetas from './Tarjetas'

const Grilla = ({productos}) => {
  return (
    <div className='row'>
        {productos.map(productos=>(
            <div className="col-md-4" key={productos.id}>
            <Tarjetas productos={productos}/>
            </div>
        ))}
    </div> 
  )
}

export default Grilla
