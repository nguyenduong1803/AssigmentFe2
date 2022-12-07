import { Stack } from "@mui/system";
import { useQuery } from "react-query";
import {
  getProductById,
} from "services/productService/ProductService";
import { IProduct } from "Types/Interface/Product";
import LocalStorage from "utils/LocalStorage";
import CartItem from "../../Atom/CartItem/CartItem";

type TypeCart = {
  productId: string;
  quantity: number;
};
const RenderCart = () => {
  const cart: TypeCart[] = LocalStorage.get("cart");
  const list = cart?.map((item: TypeCart) => item.productId);
  const listId = list?.join(",");
  const {  data } = useQuery(
    "productCart",
    () => getProductById({ listId }),
    {
      staleTime: 3000,
    }
  );
  return (
    <Stack spacing={1}>
      {data &&
        data.data.map((item: IProduct) => {
          return cart.map((itemCart) => {
            if (item._id === itemCart.productId) {
              const productCart = { ...item, quantity: itemCart.quantity };
              return <CartItem key={item._id} {...productCart} />;
            }
          });
        })}
    </Stack>
  );
};
export default RenderCart;
