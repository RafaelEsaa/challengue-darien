import { axiosInstance } from "../../../shared/api/axiosConfig";

export interface Reservation {
  date: string;
  time: string;
  name: string;
  comment: string;
  typeSpace: string;
  id?: number;
}

export interface Response {
  success: boolean;
  message: string;
}

// Para memoizar la promesa y no se re renderice siempre
let reservationPromise: Promise<Reservation[]> | null = null;

export const getReservations = (): Promise<Reservation[]> => {
  if (!reservationPromise) {
    reservationPromise = axiosInstance
      .get("/reservas")
      .then((response) => response.data);
  }
  return reservationPromise;
};

export const postReservations = (data: Reservation): Promise<Response> => {
  return axiosInstance
    .post("/reservas", data)
    .then((response) => response.data);
};

export const deleteReservation = (id: number): Promise<Response> => {
  return axiosInstance
    .delete(`/reservas/${id}`)
    .then((response) => response.data);
};
