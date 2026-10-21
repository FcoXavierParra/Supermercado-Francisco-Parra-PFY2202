import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetalleProducto from "./pages/DetalleProducto";
import QuienesSomos from "./pages/QuienesSomos";
import Contactanos from "./pages/Contactanos";
import NoEncontrado from "./pages/NoEncontrado";
import BottomNav from "./components/BottomNav";
import { inventarioInicial } from "./data/productos";

function App() {
  // El estado vive en App (estado "levantado") para que no se pierda al cambiar de página
  // y para que Home y DetalleProducto muestren el mismo stock.
  const [inventario, setInventario] = useState(inventarioInicial);

  const ajustarStock = (id, delta) => {
    setInventario((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, stock: Math.max(0, p.stock + delta) } : p
      )
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>SuperMarket Inventario</h1>
        <p className="App-subtitle">Gestión de inventario para supermercado</p>
      </header>

      {/* Área principal: aquí React Router decide qué página renderizar según la URL */}
      <main className="App-main">
        <Routes>
          <Route
            path="/"
            element={<Home inventario={inventario} ajustarStock={ajustarStock} />}
          />
          {/* Ruta dinámica: :id toma el valor de la URL, por ejemplo /producto/3 */}
          <Route
            path="/producto/:id"
            element={<DetalleProducto inventario={inventario} ajustarStock={ajustarStock} />}
          />
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
