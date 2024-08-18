import React from "react";

const Tarjeta = (props) => {
  return (
    <div>
      <div className="card">
       
        <div className="card-body">
          <h3 className="card-title">
            Pizza 
            {props.nombre}
            {props.nombreDos}
            {props.nombreTres}
            </h3>
          <p className="card-text">
          
          </p>
         <div className="boton container row">
          <div className="col-6"><a href="#" className="btn btn-success">
           ver más
          </a></div>
          <div className="col-6">
          <a href="#" className="btn btn-danger">
            Añadir
          </a></div>
         
         </div>
        </div>
      </div>
    </div>
  );
};

export default Tarjeta;
