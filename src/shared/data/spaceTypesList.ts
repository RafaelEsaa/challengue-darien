import { v4 as uuidv4 } from "uuid";

export const typeSpace = [
  { id: uuidv4(), description: "Consulta médica", value: "consulta" },
  { id: uuidv4(), description: "Vacunación", value: "vacuna" },
  { id: uuidv4(), description: "Examen de laboratorio", value: "laboratorio" },
];
