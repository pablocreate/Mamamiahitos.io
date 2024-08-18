import React from 'react'
const Ingrediente = (props) => {
  return (
    <div>
        <h5>Ingredientes </h5>
      <p>
        {props.ingredienteUno}
        {props.ingredienteDos}
        {props.ingredienteTres}
        </p>
        <hr />
        
    </div>
  )
}

export default Ingrediente
