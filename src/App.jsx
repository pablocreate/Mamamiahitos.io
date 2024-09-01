import "./App.css";
import Header from "./componentes/Header";
import Navegador from "./componentes/logins/Navegador";
import Footer from "./componentes/Footer";
import Grilla from "./componentes/Grilla";
import Carrito from "./Carrito";
import Detalle from "./componentes/Detalle";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes , Route } from "react-router-dom";
import Logins from "./componentes/nuevos/Logins";
import Registros from "./componentes/nuevos/Registros";
import NotFound from "./componentes/nuevos/NotFound";
import Inicio from "./componentes/logins/Inicio";



function App() {
  const [productos, setProductos] = useState([]);
  const obtenerInformacion = async () => {
    const respuesta = await fetch("http://localhost:5000/api/pizzas");
    const data = await respuesta.json();
    setProductos(data);
  };
  useEffect(() => {
    obtenerInformacion();
  }, []);

  return (
    <>
      <Navegador />
      <Header/>
      <Routes>
        <Route path="/Inicio" element={<Inicio/>}/>
        <Route path="/Grilla" element={<Grilla productos={productos} />}/>
        <Route path="/Carrito" element={<Carrito productos={productos} />}/>
        <Route path="/Detalle" element={<Detalle/>}/>
        <Route path="/Logins" element={<Logins/>}/>
        <Route path="/Registros" element={<Registros/>}/>
        <Route path="*" element={<NotFound />} />
       
      </Routes>

    
      
     
      <Footer />
 
     
     

      
    </>
  );
}

export default App;
