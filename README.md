# Supermercado – Gestión de Inventario

**Alumno:** Francisco Parra
**Asignatura:** Desarrollo Frontend II (PFY2202)
**Actividad:** Formativa 1 – Semana 1: "Utilizando tecnologías avanzadas de React en sitios web"

Sitio web SPA desarrollado con React y React Router para la gestión de inventario de un supermercado. Incluye una página principal (Home) y un menú inferior que permite navegar a dos páginas adicionales sin recargar el navegador.

## Páginas y rutas

| Ruta | Página | Descripción |
|---|---|---|
| `/` | Inicio | Inventario: resumen de productos, unidades y bajo stock; buscador por nombre o categoría; ajuste de stock con botones −/+; alerta "¡Reponer!" bajo 10 unidades. |
| `/producto/:id` | Detalle de producto | Ruta dinámica: muestra el producto según el `id` de la URL (`useParams`), permite ajustar su stock y maneja códigos inexistentes. |
| `/quienes-somos` | Quiénes somos | Historia, misión, valores y equipo del supermercado. |
| `/contactanos` | Contáctanos | Datos de contacto y formulario; al enviarlo redirige al inicio con `useNavigate`. |
| `*` | 404 | Página para rutas no definidas, con enlace de regreso al inicio. |

## Uso de React Router (v6)

- `BrowserRouter` envuelve la aplicación en `src/index.js`.
- `Routes` y `Route` definen las rutas en `src/App.js`.
- `NavLink` en el menú inferior (`src/components/BottomNav.js`) resalta la pestaña activa.
- Ruta dinámica `/producto/:id` leída con `useParams` en `src/pages/DetalleProducto.js`; desde el inventario cada producto es un `Link` a su detalle.
- El estado del inventario vive en `App.js` y se pasa por props, así no se pierde al cambiar de página.
- `useNavigate` realiza la redirección programática tras enviar el formulario de contacto.
- `Link` en la página 404 para volver al inicio.

## Estructura

```
public/index.html
src/
  index.js                 BrowserRouter + montaje de la app
  App.js                   Definición de rutas y estado del inventario
  data/productos.js        Datos iniciales del inventario
  App.css                  Estilos
  components/BottomNav.js  Menú inferior de navegación
  pages/Home.js            Inventario (página principal)
  pages/DetalleProducto.js Detalle de producto (ruta dinámica)
  pages/QuienesSomos.js
  pages/Contactanos.js
  pages/NoEncontrado.js
```

## Ejecución local

Requisitos: Node.js 24 (versión usada en desarrollo y en el deploy).

```bash
git clone https://github.com/FcoXavierParra/Supermercado-Francisco-Parra-PFY2202.git
cd Supermercado-Francisco-Parra-PFY2202
npm install
npm start
```

La aplicación queda disponible en http://localhost:3000.

## Sitio publicado

https://fcoxavierparra.github.io/Supermercado-Francisco-Parra-PFY2202/

Se publica automáticamente en GitHub Pages con cada push a `main` (`.github/workflows/deploy.yml`).

## Tecnologías

HTML, CSS, JavaScript, React 18, React Router DOM 6, Create React App (react-scripts 5).
