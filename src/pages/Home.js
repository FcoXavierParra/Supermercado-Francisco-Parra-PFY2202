import React, { useState } from "react";

// Inventario inicial del supermercado (datos de ejemplo en memoria)
const inventarioInicial = [
  { id: 1, nombre: "Arroz Grado 1 1kg", categoria: "Abarrotes", stock: 120, precio: 1290 },
  { id: 2, nombre: "Leche Entera 1L", categoria: "Lácteos", stock: 48, precio: 990 },
  { id: 3, nombre: "Pan Molde Integral", categoria: "Panadería", stock: 15, precio: 2190 },
  { id: 4, nombre: "Manzana Fuji kg", categoria: "Frutas y Verduras", stock: 6, precio: 1590 },
  { id: 5, nombre: "Detergente 3L", categoria: "Limpieza", stock: 22, precio: 6490 },
  { id: 6, nombre: "Pollo Entero kg", categoria: "Carnes", stock: 9, precio: 3290 },
];

const STOCK_MINIMO = 10;

function Home() {
  const [inventario, setInventario] = useState(inventarioInicial);
  const [filtro, setFiltro] = useState("");

  const ajustarStock = (id, delta) => {
    setInventario((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, stock: Math.max(0, p.stock + delta) } : p
      )
    );
  };

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
              <td>{p.nombre}</td>
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
