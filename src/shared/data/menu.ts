export const menuOptions = [
  {
    label: "Espacios", // Lista de espacios (GET a /espacios)
    path: "/",
  },
  {
    label: "Reservas", // Lista de reservas (GET a /reservas)
    path: "/bookings",
  },
  {
    label: "Crear reservas", // Crear nuevas reservas (POST a /reservas)
    // Este path debería ser el que maneja la creación de reservas
    path: "/bookings/booking-create",
  },
];
