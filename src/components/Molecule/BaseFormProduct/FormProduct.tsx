import { TextField, Grid } from "@mui/material";
import React from "react";
import ControlTextField from "../../Atom/Form/ControlTextField";
import { useForm } from "react-hook-form";
type Props = {};
type FormData = {
  name: string;
};
const FormProduct = (props: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({
    mode: "onChange",
  });
  const [name] = watch(["name"]);
  console.log(name)
  return (
    <Grid container>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <ControlTextField name="name" control={control} />
    </Grid>
  );
};
export default FormProduct;
