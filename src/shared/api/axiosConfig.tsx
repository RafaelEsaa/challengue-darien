import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  //   baseURL: "http://localhost:3001",
  // timeout: 10000,
});

// Interceptor para añadir token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Interceptor para manejar errores
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // El servidor respondió con un código de estado fuera del rango de 2xx
      console.error("Error en la respuesta del servidor:", error.response.data);
    } else if (error.request) {
      // La solicitud fue realizada pero no se recibió respuesta
      console.error("No se recibió respuesta del servidor:", error.request);
    } else {
      // Ocurrió un error al configurar la solicitud
      console.error("Error al configurar la solicitud:", error.message);
    }
    return Promise.reject(error);
  }
);

// Exportar la instancia de axios
export default axiosInstance;
export { axiosInstance as axios };
