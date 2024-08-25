import "./App.css";
import Header from "./componentes/Header";
import Navegador from "./componentes/Navegador";
import Footer from "./componentes/Footer";
import Grilla from "./componentes/Grilla";
import Carrito from "./Carrito";
import Detalle from "./componentes/Detalle";
import { useEffect, useState } from "react";


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
      <Header />
      <Grilla productos={productos} />
      <Detalle/>
      <Carrito productos={productos} />
      <Footer />
    </>
  );
}

export default App;
