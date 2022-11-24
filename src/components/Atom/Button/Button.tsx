import { ReactNode} from "react";
import { Link } from "react-router-dom";
// mui
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import type { ButtonProps } from '@mui/material/Button';
interface TypeProps extends ButtonProps {
  to: string;
  href: string;
  children: ReactNode;
};

const Buttons = (props: Partial<TypeProps>) => {
  let TypeButton: any = "div";
  const { to, href, children, ...passProps } = props;
  const getProps: Partial<TypeProps> = { ...passProps };
  if (to) {
    getProps.to = to;
    TypeButton = Link;
  } else if (href) {
    getProps.href = href;
    TypeButton = "a";
  }
  const ButtonStyle = styled(TypeButton)({
    display: "inline-block",
    minWidth: " 64px;",
    borderRadius: " 4px;",
    textDecoration: "none",
  });

  return (
    <ButtonStyle >
      <Button {...getProps} sx={{ backgroundColor: "#fff" }}  variant="outlined"color="success"  size="medium">
        {props.children}
      </Button>
    </ButtonStyle>
  );
};

export default Buttons;
