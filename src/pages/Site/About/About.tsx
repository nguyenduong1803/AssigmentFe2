import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import DashbroadLayout from "../../../components/Template/Admin"
type Props = {};

const About = (props: Props) => {
  return (
  <p>
      {/* <DashbroadLayout>
          <Buttons variant="text">Text</Buttons>
      </DashbroadLayout> */}
  </p>
  );
};
const Buttons = styled(Button)`
  color:red;
`
export default About;
