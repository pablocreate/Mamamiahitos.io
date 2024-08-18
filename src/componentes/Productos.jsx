import React from 'react'
import Tarjeta from './Tarjeta'
import Ingrediente from './Ingrediente'
import Precio from './Precio'
import ImagenUno from './pizzas/espanish.jpg'
import ImagenDos from './pizzas/napoli.jpg'
import ImagenTres from './pizzas/pepe.jpg'


const Productos = () => {
  return (
   <div className='row'>
    <div className="col-md-4">
      <br />
    <div className="image1"></div>
    <Tarjeta nombre="Napolitana"/>
    <br/>
    <Ingrediente ingredienteUno="Mozzarela,Tomate,Jamón,Oregano"/>
    <Precio precioUno="$5.950"/>
    </div>

    <div className="col-md-4">
      <br />
    <div className="image2"></div>
    <Tarjeta nombreDos="Española"/>
    <br/>
    <Ingrediente ingredienteDos="Mozzarela,Gorgonzola,Parmesano,Provolone"/>
    <Precio precioDos="$6.950" />
    </div>
    
    <div className="col-md-4">
      <br />
    <div className="image3"></div>
    <Tarjeta nombreTres="Pepperoni"/>
    <br/>
    <Ingrediente ingredienteTres="Mozzarela,Pepperoni,Oregano"/>
    <Precio precioTres="$6.790"/> 
    </div>
<hr />

   </div>
  )
}

export default Productos
