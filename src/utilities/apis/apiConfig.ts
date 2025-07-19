// API Configuration  
const API_BASE_URL =  "http://127.0.0.1:8000/api/v1";

export const API_ENDPOINTS = {
  // Enterprise endpoints

  //para obtener las empresas que pertenecen a una categoria especifica (kevin)
  EMPRESA_FILTRO_POR_CATEGORIA: (id_categoria: string) =>
    `${API_BASE_URL}/EMPRESA_FILTRO_POR_CATEGORIA/${id_categoria}`,

 GET_ENTERPRISE_BY_ID: (id: string) => 
    `${API_BASE_URL}/enterprises/${id}`,
};

export { API_BASE_URL };
