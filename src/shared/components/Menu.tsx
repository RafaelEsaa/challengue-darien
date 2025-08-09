import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Toolbar,
  Typography,
  Button,
  Box,
  Divider,
  List,
  AppBar,
  Drawer,
  IconButton,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { menuOptions } from "../data";

const drawerWidth = 240;

const Menu = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Define the container for the drawer
  const container =
    window !== undefined ? () => window.document.body : undefined;

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "grey", height: "100%" }} // azul oscuro de fondo
    >
      <Typography variant="h6" sx={{ my: 2, color: "white" }}>
        MUI
      </Typography>
      <Divider sx={{ borderColor: "white" }} />
      <List>
        {menuOptions.map((option) => (
          <Button
            key={option.path}
            color="inherit"
            component={RouterLink}
            to={option.path}
            className="text-white hover:bg-blue-700 transition-colors duration-300 rounded-md px-3 py-2"
          >
            {option.label}
          </Button>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        component={"nav"}
        className="shadow-lg rounded-b-lg"
        sx={{
          backgroundColor: theme.palette.background.paper,
          paddingTop: 1,
          paddingBottom: 1,
        }} // azul oscuro
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Botón hamburguesa (solo en mobile) */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Título */}
          <Typography
            variant="h6"
            component="div"
            className="text-white font-bold text-xl"
            color="textSecondary"
            sx={{ flexGrow: 1 }}
          >
            Reserva tu espacio
          </Typography>

          {/* Opciones solo en pantallas grandes */}
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {menuOptions.map((option) => (
              <Button
                key={option.path}
                color="inherit"
                component={RouterLink}
                to={option.path}
                className="text-white px-3 py-2"
              >
                {option.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            backgroundColor: "#ffffff", // blanco de fondo
            position: "relative",
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Menu;
