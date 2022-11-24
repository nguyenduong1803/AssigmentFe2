import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
const ControlTextField = (props: any) => {
  const { control, name, placeholder, disabled, ...rest } =
    props;
  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <TextField
          id={name}
          fullWidth
          error={Boolean(error)}
          helperText={error?.message && error.message}
          placeholder={disabled ? void 0 : placeholder}
          disabled={disabled}
          {...field}
          {...rest}
        />
      )}
      name={name}
      control={control}
    />
  );
};

export default ControlTextField;
