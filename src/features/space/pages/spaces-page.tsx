import { use } from "react";
import { getSpace, type Space } from "../api";
import { typeSpace } from "../../../shared/data";
import { Container, Typography, Paper } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "value", headerName: "Tipo de espacio", width: 130 },
  { field: "description", headerName: "Descripcion", width: 130 },
];

const paginationModel = { page: 0, pageSize: 5 };

const SpacesPage = () => {
  const typeSpaces = use(getSpace());
  console.log("Espacios:", typeSpaces);
  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h5" mb={2} color="primary">
          Lista de Espacios
        </Typography>

        <Paper sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={typeSpace}
            getRowId={(row: Space) => row.value || row.description} // Asegúrate de que cada fila tenga un ID único
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
      </Container>
    </>
  );
};

export default SpacesPage;
