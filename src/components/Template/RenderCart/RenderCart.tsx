import { Stack } from "@mui/system";
import React, { FC, useEffect } from "react";
import { useQuery } from "react-query";
import {
  getProduct,
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
  const listId = list.join(",");
  const { isLoading, error, data, refetch } = useQuery(
    "productCart",
    () => getProductById({ listId }),
    {
      staleTime: 3000,
    }
  );
  console.log(data);
  return (
    <Stack spacing={1}>
      {data &&
        data.data.map((item: IProduct, index: number) => {
          return cart.map((itemCart) => {
            if (item._id === itemCart.productId) {
              const productCart = { ...item, quantity: itemCart.quantity };
              return <CartItem {...productCart} />;
            }
          });
        })}
    </Stack>
  );
};
export default RenderCart;
