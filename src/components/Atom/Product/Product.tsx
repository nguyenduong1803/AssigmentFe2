import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
type Props = {
  id: string;
  image: string;
  name: string;
  price: number;
  discount?: number;
};

const Product = (props: Props) => {
  const { image, name, price, discount, id } = props;
  return (
    <Box>
      <BoxImage position="relative">
        <img
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
          src="https://shtheme.com/demosd/vura/wp-content/uploads/2019/06/pro2.jpg"
          alt=""
        />
        <Sale>Sale</Sale>
        <WrapIcon className="productIcon">
          <Stack direction="row" spacing={2}>
            <IconButton sx={{ backgroundColor: "#fff",boxShadow: "rgba(34, 34, 34, 0.1) 0px 4px 12px;" }}>
              <RemoveRedEyeIcon />
            </IconButton>
            <IconButton sx={{ backgroundColor: "#fff",boxShadow: "rgba(34, 34, 34, 0.1) 0px 4px 12px;"  }}>
              <ShoppingCartIcon />
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
  transform:"translateX(-50%)",
  opacity: 0,
  visibility: "hidden",
  transition: "0.5s",
});
const BoxImage = styled(Box)({
  "&:hover .productIcon": {
    opacity: 1,
    visibility: "visible",
    bottom:"15px",
   
  },
});
export default Product;
