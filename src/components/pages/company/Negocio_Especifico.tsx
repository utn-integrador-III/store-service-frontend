import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Negocio_Especifico = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // COdigo de prueba, por ahora solo recibe el ID del negocio de la pantalla anterior

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <button
        onClick={handleGoBack}
        style={{
          background: "#2f4156",
          color: "white",
          border: "none",
          padding: "0.8rem 2rem",
          borderRadius: "25px",
          cursor: "pointer",
          marginBottom: "2rem",
        }}
      >
        ← Volver
      </button>

      <h1 style={{ color: "#2f4156", marginBottom: "1rem" }}>
        Negocio Específico
      </h1>

      <div
        style={{
          background: "#f5efeb",
          padding: "2rem",
          borderRadius: "10px",
          border: "2px solid #567c8d",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ color: "#567c8d", marginBottom: "1rem" }}>
          ID del Negocio Recibido:
        </h2>
        <p
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#2f4156",
            background: "#c8d9e6",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          {id || "No ID received"}
        </p>
      </div>

      <p style={{ marginTop: "2rem", color: "#567c8d" }}>
        Este componente será desarrollado por otro desarrollador
      </p>
    </div>
  );
};

export default Negocio_Especifico;
