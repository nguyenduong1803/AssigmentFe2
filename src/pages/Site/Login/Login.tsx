import { Container, Grid } from "@mui/material";
import React from "react";
import { GoogleAuthProvider } from "firebase/auth";
import FormLogin from "./Organism/FormLogin";

type Props = {};

const Login = (props: Props) => {
  return (
    <>
      <Container>
        <Grid>
          <FormLogin />
        </Grid>
      </Container>
    </>
  );
};
export default Login;
