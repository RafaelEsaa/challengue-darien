import SpaceList from "./pages/spaces-page";
import DefaultLayout from "../../shared/layouts/DefaultLayout";

export const spaceRoutes = {
  path: "/",
  element: <DefaultLayout />,
  children: [
    {
      index: true,
      element: <SpaceList />,
      // loader: HomePage.loader, // Exportado desde HomePage
      // errorElement: <ErrorBoundary />,
    },
  ],
};
