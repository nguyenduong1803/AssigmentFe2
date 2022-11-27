import {
  FormHelperText,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { PhotoCamera } from "@mui/icons-material";
//
import ControlTextField from "../../../../../components/Atom/Form/ControlTextField";
import Buttons from "../../../../../components/Atom/Button/Button";
import ControlSelect2 from "../../../../../components/Atom/Form/ControlSelect2";

const BaseFormCategory = (props: any) => {
  const { fakeOptions, fakeCategoey, form, onSubmit } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <ControlTextField
            id="outlined-basic"
            disabled
            label="Category ID"
            name="id"
            control={control}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlTextField
            id="outlined-basic"
            label="Category Name"
            name="category"
            control={control}
          />
        </Grid>
      </Grid>
      <Buttons type="submit">Submit</Buttons>
    </Form>
  );
};
const Form = styled("form")({
  maxWidth: "1000px",
  margin: "0 auto",
});
export default BaseFormCategory;
