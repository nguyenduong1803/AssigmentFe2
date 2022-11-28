import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
//
import ControlTextField from "../../../../components/Atom/Form/ControlTextField";
import Buttons from "../../../../components/Atom/Button/Button";

const BaseFormCategory = (props: any) => {
  const { form, onSubmit } = props;
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
            name="_id"
            control={control}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlTextField
            id="outlined-basic"
            label="Category Name"
            name="categoryName"
            control={control}
          />
        </Grid>
        <Grid item>
          <Buttons type="submit">Submit</Buttons>
        </Grid>
      </Grid>
    </Form>
  );
};
const Form = styled("form")({
  maxWidth: "1000px",
  margin: "0 auto",
});
export default BaseFormCategory;
