import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contactanos() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);
  const navigate = useNavigate(); // hook de React Router para redirección programática

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    // Redirección condicional: tras 2 segundos volvemos al Home sin recargar la página
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <section className="pagina">
      <h2>Contáctanos</h2>

      <div className="contacto-info">
        <p><strong>Dirección:</strong> Av. Los Almendros 1234, Ñuñoa, Santiago</p>
        <p><strong>Teléfono:</strong> +56 2 2345 6789</p>
        <p><strong>Correo:</strong> contacto@supermarket.cl</p>
        <p><strong>Horario:</strong> Lunes a domingo, 08:00 a 22:00 hrs.</p>
      </div>

      {enviado ? (
        <div className="exito">
          ¡Gracias, {form.nombre}! Recibimos tu mensaje. Te redirigimos al inicio...
        </div>
      ) : (
        <form className="formulario" onSubmit={handleSubmit}>
          <label>
            Nombre
            <input name="nombre" value={form.nombre} onChange={handleChange} required />
          </label>
          <label>
            Correo electrónico
            <input type="email" name="correo" value={form.correo} onChange={handleChange} required />
          </label>
          <label>
            Mensaje
            <textarea name="mensaje" rows="4" value={form.mensaje} onChange={handleChange} required />
          </label>
          <button type="submit" className="btn-primario">Enviar</button>
        </form>
      )}
    </section>
  );
}

export default Contactanos;
