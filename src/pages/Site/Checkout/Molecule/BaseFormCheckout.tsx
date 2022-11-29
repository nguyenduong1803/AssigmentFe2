import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
//
import ControlTextField from "../../../../components/Atom/Form/ControlTextField";
import Buttons from "../../../../components/Atom/Button/Button";

const BaseFormCheckout = (props: any) => {
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
            label="Recipient's Name"
            name="username"
            control={control}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlTextField
            id="outlined-basic"
            label="Address"
            name="address"
            control={control}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlTextField
            id="outlined-basic"
            label="Phone Number"
            name="phoneNumber"
            control={control}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlTextField
            id="outlined-basic"
            label="Email"
            name="email"
            control={control}
          />
        </Grid>
        <Grid item xs={12} >
          <ControlTextField
            rows={4}
            multiline
            label="Note"
            name="note"
            control={control}
          />
        </Grid>
        <Grid item xs={12}>
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
export default BaseFormCheckout;
