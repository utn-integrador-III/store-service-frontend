import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Negocio_Especifico = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleGoBack}>← Volver</button>
      <h1>Negocio Específico</h1>
      <p>ID recibido: {id}</p>
      <p>Este componente será desarrollado por otro desarrollador</p>
    </div>
  );
};

export default Negocio_Especifico;
