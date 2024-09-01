import React from "react";
import Formularios from "./Formularios";

const Logins = () => {
  return (
    <>
      <h1>Iniciar sesion</h1>
      <div className="container">
        <Formularios logins={true}/>
      </div>
    </>
  );
};

export default Logins;
