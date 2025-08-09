"use client";

import { use } from "react";
import { getReservations, type Reservation, deleteReservation } from "../api";
import { ToastContainer, toast } from "react-toastify";
import { Typography, Container, Paper, Button } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";

const Booking = () => {
  const reservations = use(getReservations());

  const columns: GridColDef[] = [
    { field: "name", headerName: "Nombre", width: 90 },
    { field: "comment", headerName: "Comentario", width: 130 },
    {
      field: "time",
      headerName: "Hora",
      type: "string",
      width: 90,
    },
    {
      field: "date",
      headerName: "Fecha",
      type: "string",
      width: 90,
    },
    {
      field: "typeSpace",
      headerName: "Tipo de Espacio",
      type: "string",
      width: 90,
    },
    {
      field: "actions",
      headerName: "Acciones",
      width: 130,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        return (
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={() => handleDelete(params.row.id || 0)}
          >
            Eliminar
          </Button>
        );
      },
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  const handleDelete = async (id: number) => {
    console.log("Eliminar reserva con ID:", id);
    try {
      const result = await deleteReservation(id);
      console.log("Resultado de la eliminación:", result);
      toast(result.message, {
        type: "success",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
      });
    } catch (error) {
      toast(error.message, {
        type: "error",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <Container maxWidth="sm">
        <Typography variant="h5" mb={2} color="primary">
          Lista de reservas existentes (GET)
        </Typography>

        <Paper sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={reservations.length > 0 ? reservations : []}
            getRowId={(row: Reservation) => row.id || row.name} // Asegúrate de que cada fila tenga un ID único
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

export default Booking;
