import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_ENDPOINTS } from "../../../utilities/apis/apiConfig";
import "../../../styles/negocios-especificos.css";

// Simple interface for enterprise data
interface Enterprise {
  _id: string;
  nombre_empresa: string;
  direccion: string;
  categoria: string;
  correo_electronico: string;
  telefono: string;
  fotos: string[];
  horario: string;
  informacion_empresa: string;
  tipo_cedula: string;
  numero_cedula: string;
}

const Negocios_Especificos_por_categoria = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [enterprises, setEnterprises] = useState<Enterprise[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categoryName, setCategoryName] = useState<string>("");

  const handleGoBack = () => {
    navigate("/");
  };

  // Category mapping based on ID

  const getCategoryName = (categoryId: string): string => {
    const categories: { [key: string]: string } = {
      "1": "Restaurantes",
      "2": "Clinicas",
      "3": "Barberias",
      "4": "Hoteles",
    };
    return categories[categoryId] || "Categoría";
  };

  useEffect(() => {
    const fetchEnterprises = async () => {
      if (!id) {
        setError("ID de categoría no válido");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        setCategoryName(getCategoryName(id));

        console.log("Fetching enterprises for category ID:", id);

        // Direct API call to FastAPI backend using configuration
        const response = await fetch(
          API_ENDPOINTS.EMPRESA_FILTRO_POR_CATEGORIA(id)
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setEnterprises(data);
      } catch (err) {
        console.error("Error fetching enterprises:", err);
        setError("Error al cargar las empresas. Por favor, intenta de nuevo.");
      } finally {
        setLoading(false);
      }
    };

    fetchEnterprises();
  }, [id]);

  const renderEnterpriseCard = (enterprise: Enterprise) => (
    <div
      key={enterprise._id}
      className="enterprise-card"
      onClick={() => navigate(`/negocio-especifico/${enterprise._id}`)}
      style={{ cursor: "pointer" }}
    >
      <div className="enterprise-header">
        <h3 className="enterprise-name">{enterprise.nombre_empresa}</h3>
        <span className="enterprise-category">{enterprise.categoria}</span>
      </div>

      <div className="enterprise-body">
        <div className="enterprise-info">
          <div className="info-row">
            <span className="info-icon">📍</span>
            <span className="info-text">{enterprise.direccion}</span>
          </div>

          <div className="info-row">
            <span className="info-icon">📧</span>
            <span className="info-text">{enterprise.correo_electronico}</span>
          </div>

          <div className="info-row">
            <span className="info-icon">📞</span>
            <span className="info-text">{enterprise.telefono}</span>
          </div>

          <div className="info-row">
            <span className="info-icon">🆔</span>
            <span className="info-text">
              {enterprise.tipo_cedula}: {enterprise.numero_cedula}
            </span>
          </div>
        </div>

        {enterprise.informacion_empresa && (
          <div className="enterprise-description">
            <strong>Acerca de nosotros:</strong>
            <p>{enterprise.informacion_empresa}</p>
          </div>
        )}

        <div className="enterprise-hours">
          <strong>Horario:</strong> {enterprise.horario}
        </div>
      </div>
    </div>
  );

  return (
    <div className="negocios-especificos">
      <div className="header-section">
        <button onClick={handleGoBack} className="back-button">
          ← Volver al inicio
        </button>

        <h1 className="header-title">{categoryName}</h1>
        <p className="header-subtitle">
          Encuentra los mejores negocios en la categoría de{" "}
          {categoryName.toLowerCase()}
        </p>
      </div>

      {loading && (
        <div className="loading-spinner">
          <div>Cargando empresas...</div>
        </div>
      )}

      {error && (
        <div className="error-message">
          <strong>Error:</strong> {error}
        </div>
      )}

      {!loading && !error && enterprises.length === 0 && (
        <div className="no-enterprises">
          <div className="no-enterprises-icon">🏪</div>
          <div className="no-enterprises-text">
            No se encontraron empresas en esta categoría
          </div>
          <div className="no-enterprises-subtext">
            Intenta con otra categoría o vuelve más tarde
          </div>
        </div>
      )}

      {!loading && !error && enterprises.length > 0 && (
        <div className="enterprises-grid">
          {enterprises.map(renderEnterpriseCard)}
        </div>
      )}
    </div>
  );
};

export default Negocios_Especificos_por_categoria;
