import React from 'react'

const Precio = (props) => {
  return (
    <div>
        <h5>Precio: {props.precioUno}
                    {props.precioDos}
                    {props.precioTres}
                    </h5>
      
    </div>
  )
}

export default Precio
