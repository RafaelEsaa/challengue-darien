import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
const NotFound = () => {
  const theme = useTheme();
  return (
    <Box component={"section"} sx={{ margin: 0, padding: 0 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#f5f5f5",
          textAlign: "center",
          margin: 0,
          padding: 0,
        }}
      >
        <Typography
          variant="h1"
          gutterBottom
          color={theme.palette.primary.main}
        >
          Oops! Something went wrong.
        </Typography>
        <Typography variant="body1">Page not found</Typography>
      </Box>
    </Box>
  );
};

export default NotFound;
