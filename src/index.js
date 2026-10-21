import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.css";

// BrowserRouter envuelve toda la app: habilita Link, Routes, Route y los hooks de React Router.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* basename permite publicar en un subdirectorio (GitHub Pages); en local queda en "/" */}
    <BrowserRouter basename={process.env.PUBLIC_URL || "/"}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
