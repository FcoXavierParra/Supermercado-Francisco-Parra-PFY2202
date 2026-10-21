import React from "react";

function QuienesSomos() {
  return (
    <section className="pagina">
      <h2>Quiénes somos</h2>
      <p>
        <strong>SuperMarket</strong> es un supermercado de barrio fundado en 2010 en
        Santiago de Chile. Comenzamos como un almacén familiar y hoy contamos con
        tres locales y un equipo de 45 personas comprometidas con ofrecer productos
        frescos a precios justos.
      </p>

      <h3>Nuestra misión</h3>
      <p>
        Abastecer a las familias de nuestra comunidad con productos de calidad,
        manteniendo siempre el stock disponible gracias a una gestión de inventario
        moderna y transparente.
      </p>

      <h3>Nuestros valores</h3>
      <ul className="lista">
        <li><strong>Cercanía:</strong> conocemos a nuestros clientes por su nombre.</li>
        <li><strong>Frescura:</strong> reposición diaria de frutas, verduras y panadería.</li>
        <li><strong>Transparencia:</strong> precios claros y sin letra chica.</li>
        <li><strong>Sustentabilidad:</strong> reducimos mermas controlando el inventario.</li>
      </ul>

      <h3>Equipo</h3>
      <div className="equipo">
        <div className="tarjeta-persona">
          <span className="avatar">MG</span>
          <span>María González</span>
          <small>Gerente General</small>
        </div>
        <div className="tarjeta-persona">
          <span className="avatar">JP</span>
          <span>Jorge Pérez</span>
          <small>Jefe de Bodega</small>
        </div>
        <div className="tarjeta-persona">
          <span className="avatar">CR</span>
          <span>Camila Rojas</span>
          <small>Atención al Cliente</small>
        </div>
      </div>
    </section>
  );
}

export default QuienesSomos;
