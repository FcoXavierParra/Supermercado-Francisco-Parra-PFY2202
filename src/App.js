import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import Contactanos from "./pages/Contactanos";
import NoEncontrado from "./pages/NoEncontrado";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SuperMarket Inventario</h1>
        <p className="App-subtitle">Gestión de inventario para supermercado</p>
      </header>

      {/* Área principal: aquí React Router decide qué página renderizar según la URL */}
      <main className="App-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/contactanos" element={<Contactanos />} />
          {/* La ruta comodín va al final: captura cualquier URL no definida */}
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </main>

      {/* Menú inferior: navegación entre las 3 páginas sin recargar el navegador */}
      <BottomNav />
    </div>
  );
}

export default App;
