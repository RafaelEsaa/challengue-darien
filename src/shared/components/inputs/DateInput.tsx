import { styled } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
  name: string;
  label: string;
}

const DateInputStyled = styled(DatePicker)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    color: theme.palette.text.primary,
  },
}));

export const DateInput = ({ name, label }: Props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <DateInputStyled
          value={field.value}
          onChange={field.onChange}
          slotProps={{
            textField: {
              label,
              fullWidth: true,
              error: !!errors[name],
              helperText: errors[name]?.message?.toString(),
            },
          }}
        />
      )}
    />
  );
};
