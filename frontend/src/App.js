import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './componentes/Header';
import Navegation from './componentes/Navegation';
import Footer from './componentes/Footer';
import Carrito from './componentes/Carrito';
import BotonWha from './componentes/BotonWha.js';

import Inicio from './paginas/Inicio';
import AboutUs from './paginas/AboutUs';
import Libros from './paginas/Libros';
import Contacto from './paginas/Contacto';
import FormEnviado from './paginas/FormEnviado';
import CompraExitosa from './paginas/CompraExitosa';


function App() {

  const [productosEnCarrito, setProductosEnCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setProductosEnCarrito([...productosEnCarrito, producto]);
    };
    
  return (
    <Router>
            <div>
                <Header /><br />
                <Navegation />
                <Routes>
                    <Route path="/carrito" element={<Carrito productosEnCarrito={productosEnCarrito} setProductosEnCarrito={setProductosEnCarrito} />} />
                    <Route path="/" element={<Inicio />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/catalogo" element={<Libros agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/formEnviado" element={<FormEnviado />} />
                    <Route path="/compraExitosa" element={<CompraExitosa />} />
                </Routes>
                <BotonWha />
                <Footer />
            </div>
        </Router>
  );
}

export default App;
