import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IProduct } from "Types/Interface/Product";
interface Props extends IProduct {
  quantity: number;
}
const CartItem = (props: Props) => {
  const { images, price, name, quantity } = props;
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
        <Image src={images[0]} alt="" />
        <Typography flex={1} variant="subtitle2">
          {name}
        </Typography>
        <Typography variant="subtitle2">x{quantity}</Typography>
        <Typography variant="subtitle2">${price}</Typography>
      </Stack>
    </div>
  );
};
const Image = styled("img")({
  width: "80px",
  height: "80px",
  objectFit: "cover",
});

export default CartItem;
