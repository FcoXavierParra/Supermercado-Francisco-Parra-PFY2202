import React from "react";
import { Link } from "react-router-dom";

function NoEncontrado() {
  return (
    <section className="pagina centrado">
      <h2>404 · Página no encontrada</h2>
      <p>La ruta que intentaste abrir no existe.</p>
      <Link to="/" className="btn-primario">Volver al inicio</Link>
    </section>
  );
}

export default NoEncontrado;
