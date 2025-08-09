import BookingList from "./pages/index";
import BookingCreate from "./pages/booking-create";
import DefaultLayout from "../../shared/layouts/DefaultLayout";

export const bookingRoutes = {
  path: "/bookings",
  element: <DefaultLayout />,
  children: [
    {
      index: true,
      element: <BookingList />,
    },
    {
      path: "booking-create",
      element: <BookingCreate />,
    },
  ],
};
