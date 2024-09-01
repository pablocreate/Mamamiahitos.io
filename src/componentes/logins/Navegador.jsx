import React from "react";
import { Link } from "react-router-dom";

const Navegador = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Pizzeria Mamma Mia
        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav container text-center ">
          <li className="nav-item col-2">
              <Link className="nav-item" to="/">
                <button>🏠Home</button>
              </Link>
            </li>
            
            <li className="nav-item col-2">
              <Link className="nav-item" to="/Logins">
                <button>🍕Login</button>
              </Link>
            </li>

            <li className="nav-item col-2">
              <Link to="/Registros"><button>🔒Registrar</button></Link>
            </li>
            <li className="nav-item flex col-2">
              <Link className="nav-item" to="/Grilla  "><button>👩‍🍳Carta</button>
                
              </Link>
            </li>
            <li className="nav-item flex col-2">
              <Link className="nav-item" to="/Detalle  "><button>👌Pizza Day</button>
                
              </Link>
            </li>
            <li className="nav-item flex col-2">
              <Link className="nav-item" to="/Carrito  "><button>🛒Carro</button>
                
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navegador;
