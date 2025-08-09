import { axiosInstance } from "../../../shared/api/axiosConfig";

export interface Space {
  id?: string; // Opcional si la API no lo devuelve
  description: string;
  value: string;
}

// ¡Clave! Memoiza la promesa fuera del componente para evitar recrearla
let spacePromise: Promise<Space[]> | null = null;

export const getSpace = (): Promise<Space[]> => {
  if (!spacePromise) {
    spacePromise = axiosInstance
      .get("/espacios")
      .then((response) => response.data); // Asume que la API devuelve { data: Breed[] }
  }
  return spacePromise;
};
