import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
  styled,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface Option {
  id?: string;
  description: string;
  value: string | number;
}

interface Props {
  name: string;
  description: string;
  options: Option[];
}

const SelectInputStyled = styled(FormControl)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    color: theme.palette.text.primary,
  },
}));

export const SelectInput = ({ name, description, options }: Props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <SelectInputStyled fullWidth error={!!errors[name]}>
          <InputLabel>{description}</InputLabel>
          <Select
            label={description}
            value={field.value ?? ""}
            onChange={(e) => {
              field.onChange(e.target.value);
            }}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.description}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors[name]?.message?.toString()}</FormHelperText>
        </SelectInputStyled>
      )}
    />
  );
};
