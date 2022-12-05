import { Drawer, IconButton, Badge, Box, Typography } from "@mui/material";
import  {  useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ButtonLink from "../../Atom/Button/ButtonLink";
import RenderCart from "../RenderCart/RenderCart";
import LocalStorage from "utils/LocalStorage";
import { selectCart } from "redux/selector";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "redux/store";

type Props = {};

const Cart = (props: Props) => {
  const [open, setOpen] = useState(false);
  const select = useSelector(selectCart)
  console.log(select)
  let cart = LocalStorage.get("cart")?.length || 0;
  return (
    <>
      <IconButton size="medium" sx={{ ml: 2 }} aria-haspopup="true">
        <Badge
          badgeContent={cart}
          color="secondary"
          onClick={() => setOpen(true)}
        >
          <ShoppingCartIcon fontSize="medium" />
        </Badge>
      </IconButton>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        <Box width="400px" height="100%" p={3}>
          <Box
            display="flex"
            justifyContent="space-between"
            flexDirection="column"
            height="100%"
          >
            <Typography textAlign="center" m={4} variant="h5">
              Shoping Cart
            </Typography>
            <Box flex="auto" overflow="auto">
              {cart ?<RenderCart /> :<>Chưa có sản phẩm nào trong giỏ hàng</>}
            </Box>
            <Typography textAlign="center" m={4} variant="h5">
              <ButtonLink
                onClick={() => setOpen(false)}
                variant="contained"
                to="/checkout"
              >
                Checkout
              </ButtonLink>
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
export default Cart;
