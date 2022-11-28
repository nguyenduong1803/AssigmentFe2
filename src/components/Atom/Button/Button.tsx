import { ReactNode} from "react";
import { Link } from "react-router-dom";
// mui
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import type { ButtonProps } from '@mui/material/Button';
interface TypeProps extends ButtonProps {
  children: ReactNode;
};

const Buttons = (props: TypeProps) => {

  return (
      <Button  variant="outlined"color="success"  size="medium" {...props}>
        {props.children}
      </Button>
  );
};

export default Buttons;
