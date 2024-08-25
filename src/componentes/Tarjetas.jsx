import React from "react";
import {useState} from 'react'



const Tarjetas = ({ productos }) => {
  return (
    <div>
      <div className="card">
        <h4>{productos.id}</h4>
        <img src={productos.img} className=" call card-img-top" alt="..." width="200" />
        <div className="card-body">
          <h5 className="card-title">{productos.name}</h5>
          <p className="card-text">{productos.desc}</p>

          <li className="ing">Ingredientes : {productos.ingredients}</li>
          <h5>Precio ${productos.price}</h5>
          {/* <a href="#" class="btn btn-danger">
            Comprar
          </a> */}
          <div className="">
          <button href="#" className="btn btn-success" onClick={()=>agregar(productos)}>
            Añadir
          </button>
          <button href="#" className="btn btn-danger"onClick={()=>quitar(productos)}>
            Quitar
          </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};



export default Tarjetas;




