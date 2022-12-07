import { Box, IconButton, Stack, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { styled } from "@mui/material/styles";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";
import ToastMess from "../ToastMess/ToastMess";
import LocalStorage from "utils/LocalStorage";

type Props = {
  id: string;
  image: string;
  name: string;
  price: number;
  discount?: number;
  setCart: Dispatch<SetStateAction<TypeCart[]>>;
};
type TypeCart = {
  productId: string;
  quantity: number;
};

const Product = (props: Props) => {
  const [openToast, setOpenToast] = React.useState<boolean>(false);
  
  const { image, name, price, discount, id, setCart } = props;

  const handleAddCart = (productId: string) => {
    setCart((prev: TypeCart[]) => {
      const isExist = prev.some((element: TypeCart) => {
        return element.productId === productId;
      });
      if (isExist) {
        const index = prev.findIndex((item) => item.productId === productId);
        prev[index].quantity += 1;
        LocalStorage.set("cart", [...prev]);
        return [...prev];
      } else {
        const newCart = [...prev, { productId, quantity: 1 }]
        LocalStorage.set("cart", newCart);
        return newCart;
      }
    });
    setOpenToast(true);
  };
  return (
    <Box>
      <BoxImage position="relative">
        <LazyLoadImage
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
          width="100%"
          src={image}
          effect="blur"
          alt="image"
        />
        <Sale>Sale</Sale>
        <WrapIcon className="productIcon">
          <Stack direction="row" spacing={2}>
            <IconButton
              sx={{
                backgroundColor: "#fff",
                boxShadow: "rgba(34, 34, 34, 0.1) 0px 4px 12px;",
              }}
            >
              <RemoveRedEyeIcon />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "#fff",
                boxShadow: "rgba(34, 34, 34, 0.1) 0px 4px 12px;",
              }}
            >
              <ShoppingCartIcon onClick={() => handleAddCart(id)} />
            </IconButton>
          </Stack>
        </WrapIcon>
      </BoxImage>
      <Typography variant="h6" fontWeight={500}>
        {name}
      </Typography>
      <Stack direction="row" spacing={4}>
        <Typography
          variant="subtitle1"
          fontWeight={500}
          sx={{ textDecoration: "line-through" }}
        >
          ${price}
        </Typography>
        <Typography variant="subtitle1" fontWeight={700}>
          ${discount}
        </Typography>
      </Stack>
      <ToastMess
        setState={setOpenToast}
        state={openToast}
        message="Đã thêm vào giỏ hàng"
        variant="filled"
        severity="success"
      />
    </Box>
  );
};
const Sale = styled(Box)({
  position: "absolute",
  top: "16px",
  left: "16px",
  textAlign: "center",
  lineHeight: "30px",
  backgroundColor: "#2e7d32",
  width: "60px",
  height: "30px",
  color: "#fff",
  borderRadius: "4px",
});
const WrapIcon = styled(Box)({
  position: "absolute",
  bottom: "0px",
  left: "50%",
  transform: "translateX(-50%)",
  opacity: 0,
  visibility: "hidden",
  transition: "0.5s",
});
const BoxImage = styled(Box)({
  "&:hover .productIcon": {
    opacity: 1,
    visibility: "visible",
    bottom: "15px",
  },
});
export default Product;
