import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Grid, IconButton, MenuItem, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
            <MenuItem sx={{borderRadius:"4px"}}>
              <LinkTo to="/">Home</LinkTo>
            </MenuItem>
            <MenuItem sx={{borderRadius:"4px"}}>
              <LinkTo to="/about">Product</LinkTo>
            </MenuItem>
            <MenuItem sx={{borderRadius:"4px"}}>
              <LinkTo to="/about">Contacts</LinkTo>
            </MenuItem>
            <MenuItem sx={{borderRadius:"4px"}}>
              <LinkTo to="/about">About</LinkTo>
            </MenuItem>
            <MenuItem sx={{borderRadius:"4px"}}>
              <LinkTo to="/product">Blog</LinkTo>
            </MenuItem>
          </Stack>
        </Grid>
        <Grid item>
          <Stack direction="row" gap={3} alignItems="center">
            <IconButton size="medium" sx={{ ml: 2 }} aria-haspopup="true">
              <SearchIcon fontSize="large" />
            </IconButton>
            <IconButton size="medium" sx={{ ml: 2 }} aria-haspopup="true">
              <AccountCircleIcon fontSize="large" />
            </IconButton>
            <IconButton size="medium" sx={{ ml: 2 }} aria-haspopup="true">
              <ShoppingCartIcon fontSize="large" />
            </IconButton>
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
});
const LinkTo = styled(Link)({
  textDecoration: "none",
  color: "#10111e;",
  fontWeight: "600",
  fontSize: "15px",
  textTransform: "uppercase",
  fontFamily: "'Rubik', sans-serif;",
});
export default Header;
