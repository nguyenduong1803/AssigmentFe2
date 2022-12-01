import { Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
//
import ControlTextField from "../../../../components/Atom/Form/ControlTextField";
import Buttons from "../../../../components/Atom/Button/Button";
import ControllerCheckbox from "../../../../components/Atom/Form/ControlCheckbox";
import GoogleIcon from "../../../../assets/svg/GoogleIcon";
const BaseFormLogin = (props: any) => {
  const { form, onSubmit, handleLoginGoogle } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6" textAlign="center" py={4}>
        Form Login
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ControlTextField
            id="outlined-basic"
            label="Email"
            name="email"
            control={control}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlTextField
            id="outlined-basic"
            label="Password"
            name="password"
            type="password"
            control={control}
          />
        </Grid>
        <Grid item xs={12}>
          <ControllerCheckbox
            control={control}
            name="forgotpassword"
            label="Forgot password"
          />
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" alignItems="center">
            <Google onClick={handleLoginGoogle} />
            <Typography>Login with Google</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Buttons  variant="contained" type="submit">
            Login
          </Buttons>
        </Grid>
      </Grid>
    </Form>
  );
};
const Google = styled(GoogleIcon)({
  transition: "0.4s",
  transform: "scale(0.7)",
  "&:hover": {
    transform: "scale(0.8)",
    cursor: "pointer",
  },
});
const Form = styled("form")({
  maxWidth: "500px",
  padding: "24px",
  margin: "100px auto",
  borderRadius: "4px",
  border: "1px solid #ccc",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
});
export default BaseFormLogin;
