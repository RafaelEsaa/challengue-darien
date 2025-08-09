import * as yup from "yup";
import { Dayjs } from "dayjs";
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import { FormProvider, useForm } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button, Stack, Typography, Container } from "@mui/material";

import { TextInput } from "../../../shared/components/inputs/TextInput";
import { DateInput } from "../../../shared/components/inputs/DateInput";
import { TimeInput } from "../../../shared/components/inputs/TimeInput";
import { SelectInput } from "../../../shared/components/inputs/SelectInput";

import { typeSpace } from "../../../shared/data/spaceTypesList";

import { postReservations } from "../api/reservation";

const schema = yup.object().shape({
  date: yup.mixed<Dayjs>().nullable().required("La fecha es obligatoria"),
  time: yup.mixed<Dayjs>().nullable().required("La hora es obligatoria"),
  name: yup
    .string()
    .required("El nombre es obligatorio")
    .min(2, "Debe tener al menos 2 caracteres"),
  comment: yup
    .string()
    .required("El comentario es obligatorio")
    .min(5, "Debe tener al menos 5 caracteres"),
  typeSpace: yup
    .string()
    .required("El tipo de espacio es obligatorio")
    .oneOf(
      typeSpace.map((option) => option.value),
      "Tipo de espacio inválido"
    ),
});

interface FormData {
  date: Dayjs | null;
  time: Dayjs | null;
  name: string;
  comment: string;
  typeSpace: string;
}

export default function BookingForm() {
  const methods = useForm<FormData>({
    defaultValues: {
      date: null,
      time: null,
      name: "",
      comment: "",
      typeSpace: "",
    },
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    const dataFormatted = {
      ...data,
      date: data.date ? data.date.format("YYYY-MM-DD") : null,
      time: data.time ? data.time.format("HH:mm") : null,
    };

    try {
      const result = await postReservations(dataFormatted);
      console.log("datos formateads: ", result);
      toast(result.message, {
        type: "success",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
      });
      methods.reset();
    } catch (error) {
      methods.reset();
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
        theme="light"
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FormProvider {...methods}>
          <Container maxWidth="sm">
            <Typography variant="h5" mb={2} color="primary">
              Crear reserva
            </Typography>

            <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
              <Stack spacing={3}>
                <DateInput name="date" label="Fecha" />
                <TimeInput name="time" label="Hora" />
                <TextInput name="name" label="Nombre del cliente" />
                <TextInput name="comment" label="Comentarios" />
                <SelectInput
                  name="typeSpace"
                  description="Tipo de espacio"
                  options={typeSpace}
                />

                <Button type="submit" variant="contained">
                  Guardar
                </Button>
              </Stack>
            </form>
          </Container>
        </FormProvider>
      </LocalizationProvider>
    </>
  );
}
