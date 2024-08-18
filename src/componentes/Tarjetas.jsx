import React from "react";
import {useState} from 'react'



const Tarjetas = ({ productos }) => {
  return (
    <div>
      <div class="card">
        <h4>{productos.id}</h4>
        <img src={productos.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{productos.name}</h5>
          <p class="card-text">{productos.desc}</p>

          <li className="ing">Ingredientes : {productos.ingredients}</li>
          <h5>Precio ${productos.price}</h5>
          {/* <a href="#" class="btn btn-danger">
            Comprar
          </a> */}
          <div className="">
          <button href="#" class="btn btn-success" onClick={()=>agregar(productos)}>
            Añadir
          </button>
          <button href="#" class="btn btn-danger"onClick={()=>quitar(productos)}>
            Quitar
          </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};



export default Tarjetas;




