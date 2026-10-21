import React from "react";
import { Link, useParams } from "react-router-dom";
import { STOCK_MINIMO } from "../data/productos";

function DetalleProducto({ inventario, ajustarStock }) {
  // useParams lee los parámetros de la ruta dinámica /producto/:id
  const { id } = useParams();
  const producto = inventario.find((p) => p.id === Number(id));

  if (!producto) {
    return (
      <section className="pagina centrado">
        <h2>Producto no encontrado</h2>
        <p>No existe un producto con el código {id}.</p>
        <Link to="/" className="btn-primario">Volver al inventario</Link>
      </section>
    );
  }

  const bajoStock = producto.stock < STOCK_MINIMO;

  return (
    <section className="pagina">
      <Link to="/" className="volver">← Volver al inventario</Link>
      <h2>{producto.nombre}</h2>

      <div className={`detalle ${bajoStock ? "tarjeta--alerta" : ""}`}>
        <p><strong>Código:</strong> {producto.id}</p>
        <p><strong>Categoría:</strong> {producto.categoria}</p>
        <p><strong>Precio:</strong> ${producto.precio.toLocaleString("es-CL")}</p>
        <p>
          <strong>Stock:</strong> {producto.stock} unidades
          {bajoStock && <span className="badge">¡Reponer!</span>}
        </p>
        <p><strong>Stock mínimo:</strong> {STOCK_MINIMO} unidades</p>

        <div className="detalle-acciones">
          <button onClick={() => ajustarStock(producto.id, -1)} aria-label="Restar">−</button>
          <button onClick={() => ajustarStock(producto.id, +1)} aria-label="Sumar">+</button>
        </div>
      </div>
    </section>
  );
}

export default DetalleProducto;
