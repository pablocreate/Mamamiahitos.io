import React from 'react'
import {useState} from 'react'

const Carrito = ({productos}) => {
    const [carro, setCarro]=useState([])
    let total = carro.reduce((acumulador,productos) => acumulador += productos.count ,0)
    let pagar = carro.reduce((acumulador,productos )=> acumulador += (productos.price * productos.count),0)
    

    const agregar=(productos)=>{
        let coincidencia = carro.findIndex(item => item.id === productos.id)
        let nuevo_producto = {
            id:productos.id, 
            name:productos.name,
            img:productos.img ,
            price:productos.price,
            count:1}
        if(coincidencia>=0){
            carro[coincidencia].count++
            setCarro([...carro])

        }else{

            setCarro([...carro,nuevo_producto])
        }    
    }
    const quitar=(productos)=>{
      
        let coincidencia = carro.findIndex(item => item.id === productos.id)
        let nuevo_producto = {
            id:productos.id, 
            name:productos.name,
            img:productos.img ,
            price:productos.price,
            count:-1}
        if(coincidencia>=0){
            carro[coincidencia].count--
            setCarro([...carro])
        }else{

            setCarro([...carro,nuevo_producto])
            
    }
      
    }
  return (
    <div>
      <hr />
      <h5>Detalles de Compra</h5>
      <h6>Cantidad = {total}</h6>
      <h6>Total ={pagar}</h6>
      <div className='p3'>
       {productos.map((productos)=>(
      <div className='d-flex' key={productos.id}>
        <div>
        <img src={productos.img} alt="" className='w-25'/> 
        <p>{productos.name}</p>
        </div>
        <div>
        <button  className="btn btn-success col-4" onClick={()=>agregar(productos)}>
            Añadir
          </button>
          <h1  className="btn btn- col-4" >
            .........
          </h1>
          <button  className="btn btn-danger col-4"onClick={()=>quitar(productos)}>
            Quitar
          </button>
      </div>

      </div>
       ))}
      </div>
    </div>
  )
}

export default Carrito
