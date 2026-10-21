import React, { useState } from "react";
import { Link } from "react-router-dom";
import { STOCK_MINIMO } from "../data/productos";

// El inventario y la función para ajustarlo llegan como props desde App
function Home({ inventario, ajustarStock }) {
  const [filtro, setFiltro] = useState("");

  const productosFiltrados = inventario.filter(
    (p) =>
      p.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
      p.categoria.toLowerCase().includes(filtro.toLowerCase())
  );

  const totalUnidades = inventario.reduce((acc, p) => acc + p.stock, 0);
  const bajoStock = inventario.filter((p) => p.stock < STOCK_MINIMO).length;

  return (
    <section className="pagina">
      <h2>Inventario</h2>

      <div className="resumen">
        <div className="tarjeta">
          <span className="tarjeta-valor">{inventario.length}</span>
          <span className="tarjeta-label">Productos</span>
        </div>
        <div className="tarjeta">
          <span className="tarjeta-valor">{totalUnidades}</span>
          <span className="tarjeta-label">Unidades</span>
        </div>
        <div className={`tarjeta ${bajoStock > 0 ? "tarjeta--alerta" : ""}`}>
          <span className="tarjeta-valor">{bajoStock}</span>
          <span className="tarjeta-label">Bajo stock</span>
        </div>
      </div>

      <input
        className="buscador"
        type="search"
        placeholder="Buscar por producto o categoría..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      <table className="tabla">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productosFiltrados.map((p) => (
            <tr key={p.id} className={p.stock < STOCK_MINIMO ? "fila--alerta" : ""}>
              <td>
                <Link to={`/producto/${p.id}`} className="enlace-producto">{p.nombre}</Link>
              </td>
              <td>{p.categoria}</td>
              <td>${p.precio.toLocaleString("es-CL")}</td>
              <td>
                {p.stock}
                {p.stock < STOCK_MINIMO && <span className="badge">¡Reponer!</span>}
              </td>
              <td>
                <button onClick={() => ajustarStock(p.id, -1)} aria-label="Restar">−</button>
                <button onClick={() => ajustarStock(p.id, +1)} aria-label="Sumar">+</button>
              </td>
            </tr>
          ))}
          {productosFiltrados.length === 0 && (
            <tr>
              <td colSpan="5" className="vacio">No se encontraron productos.</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}

export default Home;
