import React from 'react'


const Coke = (props) => {
    console.log(props.nombre)
  return (
    <div>
      <h2>Liquido{props.nombre}</h2>
      <h3>Sabor {props.sabor}</h3>
    </div>
  )
}

export default Coke
