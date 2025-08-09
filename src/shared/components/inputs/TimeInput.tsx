import { styled } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
  name: string;
  label: string;
}

const TimeInputStyled = styled(TimePicker)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    color: theme.palette.text.primary,
  },
}));

export const TimeInput = ({ name, label }: Props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TimeInputStyled
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
