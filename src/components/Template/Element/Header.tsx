import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Grid, IconButton, MenuItem, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Cart from "../Cart/Cart";
import IconProfile from "components/Atom/IconProfile/IconProfile";
const Header = () => {
  return (
    <Wrap>
      <Grid container justifyContent="space-around" alignItems="center">
        <Grid item>
          <img
            src="https://shtheme.info/demosd/vura/wp-content/uploads/2019/08/logo@2x.png"
            alt=""
          />
        </Grid>
        <Grid item>
          <Stack
            direction="row"
            gap={3}
            sx={{ listStyle: "none" }}
            alignItems="center"
          >
            <LinkTo to="/">
              <Item sx={{ borderRadius: "4px" }}> Home</Item>
            </LinkTo>
            <LinkTo to="/products">
              <Item sx={{ borderRadius: "4px" }}> Product</Item>
            </LinkTo>
            <LinkTo to="/about">
              <Item sx={{ borderRadius: "4px" }}> About</Item>
            </LinkTo>
            <LinkTo to="/blog">
              <Item sx={{ borderRadius: "4px" }}> Blog</Item>
            </LinkTo>
            <LinkTo to="/contacts">
              <Item sx={{ borderRadius: "4px" }}> Contacts</Item>
            </LinkTo>
          </Stack>
        </Grid>
        <Grid item>
          <Stack direction="row" gap={3} alignItems="center">
            <IconButton size="medium" sx={{ ml: 2 }} aria-haspopup="true">
              <SearchIcon fontSize="medium" />
            </IconButton>
            <IconProfile />
            <Cart />
          </Stack>
        </Grid>
      </Grid>
    </Wrap>
  );
};
const Wrap = styled(Box)({
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  height: "90px",
  boxShadow: "rgb(100 100 111 / 14%) 0px 5px 12px 0px;",
});
const LinkTo = styled(Link)({
  textDecoration: "none",
});
const Item = styled(MenuItem)({
  color: "#10111e;",
  fontWeight: "600",
  fontSize: "15px",
  textTransform: "uppercase",
  fontFamily: "'Rubik', sans-serif;",
});
export default Header;
