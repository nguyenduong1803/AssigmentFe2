import { Grid, IconButton, Stack, Typography } from "@mui/material";
import ControlTextField from "../../Atom/Form/ControlTextField";
import {styled} from "@mui/material/styles"
import {PhotoCamera} from "@mui/icons-material"
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
    <Form>
    <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <ControlTextField id="outlined-basic" size="small" label="Product Name" name="name" control={control} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlTextField type="number" id="outlined-basic" size="small" label="Quantity" name="quantity" control={control} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlTextField type="number" id="outlined-basic" size="small" label="Discount" name="discount" control={control} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlTextField type="number" id="outlined-basic" size="small" label="Price" name="price" control={control} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlTextField  id="outlined-basic" size="small" label="Status" name="status" control={control} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlTextField id="outlined-basic" size="small" label="Category" name="Category" control={control} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="subtitle1">Choose File</Typography>
              <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
              </IconButton>
          </Stack>
        </Grid>
    </Grid>
    </Form>
  );
};
const Form = styled("form")({
width:"100%",
})
export default FormProduct;
