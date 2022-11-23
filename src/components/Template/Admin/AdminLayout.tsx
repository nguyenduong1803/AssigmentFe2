import { useState, ReactNode, FC } from "react";
import { Outlet } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
//
import Nav from "./nav";
import { Paper } from "@mui/material";
import Header from "./header/Header";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100vh",
  overflow: "hidden",
  backgroundColor: "rgba(0, 0, 0, 0.08);",
});

const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

type TypeProps = {
  children: ReactNode;
};
export default function DashboardLayout(props: TypeProps) {
  const [open, setOpen] = useState(false);

  return (
    <StyledRoot>
      <p
        style={{ position: "absolute" }}
        onClick={() => setOpen((prev) => !prev)}
      >
        Open
      </p>
      <Header onOpenNav={() => setOpen(true)} />
      <Nav openNav={open} onCloseNav={() => setOpen(false)} />
      <Main>
        <Paper elevation={0}>{props.children}</Paper>
      </Main>
    </StyledRoot>
  );
}
