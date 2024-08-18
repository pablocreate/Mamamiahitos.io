
import './App.css'
import Header from './componentes/Header'
import Navegador from './componentes/Navegador'
import Footer from './componentes/Footer'
import Grilla from './componentes/Grilla'
import productos from '../data.json'
import Carrito from './Carrito'



function App() {
  

  return (
    <>
    <Navegador/>
    <Header/>
    <Grilla productos={productos}/>
    <Carrito productos={productos}/> 
    <Footer/>
  
    </>
  )
}

export default App
