import { TextField, styled } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
  name: string;
  label: string;
  type?: string;
  multiline?: boolean;
}

const TextInputStyled = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    color: theme.palette.text.primary,
  },
}));

export const TextInput = ({
  name,
  label,
  type = "text",
  multiline = false,
}: Props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextInputStyled
          {...field}
          type={type}
          label={label}
          fullWidth
          multiline={multiline}
          error={!!errors[name]}
          helperText={errors[name]?.message?.toString()}
        />
      )}
    />
  );
};
