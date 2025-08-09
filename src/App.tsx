import { RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { router } from "./shared/routes/Router";
// import reactLogo from './assets/react.svg'

const appTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0F8956",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FDB930",
    },
    background: {
      default: "#F2F2F2",
      paper: "#858282",
    },
    text: {
      primary: "#3D3D3D",
      secondary: "#FFFFFF",
    },
    error: {
      main: "#FF1744",
    },
    warning: {
      main: "#FF9100",
    },
    info: {
      main: "#2196F3",
    },
    success: {
      main: "#4CAF50",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "2.125rem",
    },
    h2: {
      fontWeight: 700,
      fontSize: "1.5rem",
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={appTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};

export default App;
