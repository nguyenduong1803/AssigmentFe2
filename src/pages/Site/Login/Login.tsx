import { Container, Grid } from "@mui/material";
import React from "react";
import firebase from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../services/firebase/firebase";
import loginGoogle from "../../../services/firebase/LoginGoogle";
import LocalStorage from "../../../utils/LocalStorage";
import FormLogin from "./Organism/FormLogin";
import { login } from "../../../services/UserService/Auth";

const provider = new GoogleAuthProvider();
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
