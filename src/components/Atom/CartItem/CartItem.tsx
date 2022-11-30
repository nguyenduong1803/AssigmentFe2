import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
type Props = {};

const CartItem = (props: Props) => {
  return (
    <div>
      <Stack
        border="1px solid #ededed"
        direction="row"
        borderRadius={2}
        p={1}
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Image
          src="https://cdn.tgdd.vn/2020/11/content/4-800x500-5.jpg"
          alt=""
        />
        <Typography flex={1} variant="subtitle2">
          Beef Steak
        </Typography>
        <Box flex={1}>
          <InputNumber type="number" />
        </Box>
        <Typography variant="subtitle2">x2</Typography>
        <Typography variant="subtitle2">$100</Typography>
      </Stack>
    </div>
  );
};
const Image = styled("img")({
  width: "80px",
  height: "80px",
  objectFit: "cover",
});
const InputNumber = styled("input")({
width:"50px"
})
export default CartItem;
