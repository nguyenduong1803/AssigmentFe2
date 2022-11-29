import { Drawer, IconButton, Badge, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
        <Box width="400px">
          <Typography textAlign="center" m={4} variant="h5">
            Shoping Cart
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
export default Cart;
