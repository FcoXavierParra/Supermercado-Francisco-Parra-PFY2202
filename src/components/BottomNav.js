import React from "react";
import { NavLink } from "react-router-dom";

// NavLink es un Link que sabe si su ruta está activa: permite resaltar la pestaña actual.
function BottomNav() {
  const claseEnlace = ({ isActive }) =>
    isActive ? "nav-item nav-item--activo" : "nav-item";

  return (
    <nav className="bottom-nav" aria-label="Navegación principal">
      <NavLink to="/" end className={claseEnlace}>
        <span className="nav-icono">🏠</span>
        <span>Inicio</span>
      </NavLink>
      <NavLink to="/quienes-somos" className={claseEnlace}>
        <span className="nav-icono">🏬</span>
        <span>Quiénes somos</span>
      </NavLink>
      <NavLink to="/contactanos" className={claseEnlace}>
        <span className="nav-icono">✉️</span>
        <span>Contáctanos</span>
      </NavLink>
    </nav>
  );
}

export default BottomNav;
