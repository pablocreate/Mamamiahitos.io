import React from "react";

const Formularios = ({ logins }) => {
  return (
    <form>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Tu mail
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Clave
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      {!logins && (
        <>
          <div className="mb-3">
            <label for="exampleInputPassword2" className="form-label">
              Confirmar clave
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Avanzar
            </label>
          </div>
        </>
      )}
      <button type="submit" className="btn btn-primary">
        Registrar
      </button>
    </form>
  );
};

export default Formularios;
