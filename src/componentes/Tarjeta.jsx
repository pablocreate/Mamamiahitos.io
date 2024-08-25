import React from "react";

const Tarjeta = ({pizza}) => {
  return (
    <div className="dolly">
      <img src={pizza.img} className="card-img-top" alt="..." width="200" />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <p className="card-text">
          {pizza.desc}
        </p>
        <a href="#" className="btn btn-danger">
         <h5>$ {pizza.price}</h5>
        </a>
      </div>
    </div>
  );
};

export default Tarjeta;
