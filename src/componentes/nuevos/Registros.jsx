import React from "react";
import Formularios from "./Formularios";

const Registros = () => {
  return (
    <>
      <h1>Registrate</h1>
      <div className="container">
        <Formularios logins={false} />
      </div>
    </>
  );
};

export default Registros;
