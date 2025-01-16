import api from './config';

/**
 * Función genérica para obtener datos de cualquier ruta
 * @param {string} route - Ruta de la API
 * @returns {Promise} Datos de la respuesta
 */
export const getData = async (route) => {
  try {
    const response = await api.get(route);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

/**
 * Función genérica para enviar datos a cualquier ruta
 * @param {string} route - Ruta de la API
 * @param {object} data - Datos a enviar
 * @returns {Promise} Datos de la respuesta
 */
export const postData = async (route, data) => {
  try {
    const response = await api.post(route, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
  }
}; 