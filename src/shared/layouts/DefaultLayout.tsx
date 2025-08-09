import { Outlet } from "react-router-dom";
import { Typography, Box, CssBaseline } from "@mui/material";
import Menu from "../components/Menu";

const DefaultLayout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CssBaseline />
      {/* Header */}
      <Box component={"header"}>
        <Menu />
      </Box>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>

      {/* Footer */}
      <Box
        component={"footer"}
        sx={{
          backgroundColor: "grey.300",
          textAlign: "center",
          p: 2,
        }}
      >
        <Typography variant="body2" color="textPrimary">
          © Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
};

export default DefaultLayout;
