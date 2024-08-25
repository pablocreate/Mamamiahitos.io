import React,{useEffect,useState} from 'react'
import Tarjeta from './Tarjeta'



const Detalle = () => {
    const [pizza,setPizza]= useState([])
    const obtenerInformacion =async()=>{
    const respuesta = await fetch("http://localhost:5000/api/pizzas/p001")
    const data=await respuesta.json()
    console.log(data)
    setPizza(data)
  }
  useEffect(()=>{
    obtenerInformacion()
  },[])


  return (
<div>
    <hr />
    <h1>Especial del dia</h1>
   <Tarjeta pizza={pizza}/> 
</div>
  )
}

export default Detalle
