// API Configuration  
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

export const API_ENDPOINTS = {
  // Enterprise endpoints

  //para obtener las empresas que pertenecen a una categoria especifica (kevin)
  EMPRESA_FILTRO_POR_CATEGORIA: (id_categoria: string) =>
    `${API_BASE_URL}/EMPRESA_FILTRO_POR_CATEGORIA/${id_categoria}`,

  //para obtener la informacion de la empresa en especifico (dayron)
  EMPRESA_ESPECIFICA: (id: string) =>
    `${API_BASE_URL}/EMPRESA_ESPECIFICA/${id}`,
};

export { API_BASE_URL };
