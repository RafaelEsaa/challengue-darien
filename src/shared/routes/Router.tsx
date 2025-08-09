import { createBrowserRouter } from "react-router-dom";
import { bookingRoutes } from "../../features/booking/routes";
import { spaceRoutes } from "../../features/space/routes";
import NotFound from "../components/NotFound";

export const router = createBrowserRouter([
  spaceRoutes,
  bookingRoutes,
  {
    path: "*",
    element: <NotFound />,
  },
]);
