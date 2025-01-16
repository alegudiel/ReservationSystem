import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Ajusta esto a la URL de tu API
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api; 