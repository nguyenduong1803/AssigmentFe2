import {
  Drawer,
  IconButton,
  Badge,
  Box,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ButtonLink from "../../Atom/Button/ButtonLink";
import RenderCart from "../RenderCart/RenderCart";

type Props = {};

const Cart = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton size="medium" sx={{ ml: 2 }} aria-haspopup="true">
        <Badge badgeContent={4} color="secondary" onClick={() => setOpen(true)}>
          <ShoppingCartIcon fontSize="medium" />
        </Badge>
      </IconButton>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        <Box width="400px" height="100%" p={3}>
          <Box display="flex" justifyContent="space-between" flexDirection="column" height="100%" >
            <Typography textAlign="center" m={4} variant="h5">
              Shoping Cart
            </Typography>
            <Box flex="auto" overflow="auto">
              <RenderCart/>
            </Box>
            <Typography textAlign="center" m={4} variant="h5">
              <ButtonLink onClick={()=>setOpen(false)} variant="contained" to="/checkout">Checkout</ButtonLink>
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
export default Cart;
