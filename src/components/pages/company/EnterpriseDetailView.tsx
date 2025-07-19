import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_ENDPOINTS } from "../../../utilities/apis/apiConfig"; 
import "../../../styles/EnterpriseDetailView.css";

interface Enterprise {
  id_empresa: string;
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

const EnterpriseDetailView = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [enterprise, setEnterprise] = useState<Enterprise | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleGoBack = () => { navigate(-1); };

  useEffect(() => {
    const fetchEnterpriseDetails = async () => {
      if (!id) {
        setError("No enterprise ID provided.");
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(API_ENDPOINTS.GET_ENTERPRISE_BY_ID(id));
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEnterprise(data.data);

      } catch (err: any) {
        console.error("Error fetching enterprise details:", err);
        setError(err.message || "Failed to load enterprise data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchEnterpriseDetails();
  }, [id]);

  if (loading) return <div className="loading-spinner">Cargando...</div>;
  if (error) return <div className="error-message"><strong>Error:</strong> {error}</div>;
  if (!enterprise) return <div className="no-enterprises">Empresa no encontrada.</div>;

  return (
    <div className="enterprise-detail-container">
      <div className="detail-layout">
        <div className="image-column">
          <button onClick={handleGoBack} className="back-button">
            ← Volver
          </button>

          {enterprise.fotos && enterprise.fotos.length > 0 ? (
            <img 
              src={enterprise.fotos[0]} 
              alt={`Foto de ${enterprise.nombre_empresa}`} 
              className="enterprise-image" 
            />
          ) : (
            <div className="image-placeholder"><span>Imagen no disponible</span></div>
          )}
        </div>

        <div className="info-column">
          <div className="info-item">
            <span className="info-label">Nombre de la empresa:</span>
            <p>{enterprise.nombre_empresa}</p>
          </div>
          <div className="info-item">
            <span className="info-label">Tipo de cédula:</span>
            <p>{enterprise.tipo_cedula}</p>
          </div>
          <div className="info-item">
            <span className="info-label">Cédula:</span>
            <p>{enterprise.numero_cedula}</p>
          </div>
          <div className="info-item">
            <span className="info-label">Categoría:</span>
            <p>{enterprise.categoria}</p>
          </div>
          <div className="info-item">
            <span className="info-label">Descripción:</span>
            <p>{enterprise.informacion_empresa}</p>
          </div>
          <div className="info-item">
            <span className="info-label">Horario:</span>
            <p>{enterprise.horario}</p>
          </div>
          <div className="info-item">
            <span className="info-label">Teléfono:</span>
            <p>{enterprise.telefono}</p>
          </div>
          <div className="info-item">
            <span className="info-label">Correo electrónico:</span>
            <p>{enterprise.correo_electronico}</p>
          </div>
          <div className="info-item">
            <span className="info-label">Dirección:</span>
            <p>{enterprise.direccion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseDetailView;