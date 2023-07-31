import { Box, Grid, Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { IProduct } from "Types/Interface/Product";
import { getProduct } from "../../../services/productService/ProductService";
import LocalStorage from "../../../utils/LocalStorage";
import Product from "../../Atom/Product/Product";

type TypeCart = {
  productId: string;
  quantity: number;
};
type TypeProps = {
  xs: number;
  category?: string;
  search?: string;
};
const RenderProducts = ({ xs, category, search }: TypeProps) => {
  const [nextPage, setNextPage] = useState(1);
  const [cart, setCart] = useState<TypeCart[]>(
    () => LocalStorage.get("cart") || []
  );
  const handleChangePage = (e: React.ChangeEvent<unknown>, page: number) => {
    setNextPage(page);
  };
  const { isLoading, error, data, refetch } = useQuery("products", () =>
    getProduct({ limit: 8, page: nextPage, category, search })
  );

  useEffect(() => {
    refetch();
  }, [nextPage, category, search, refetch]);
  if (isLoading) return <p>Loading..</p>;
  if (error) return <p>An error has occurred: </p>;

  return (
    <Box marginRight="-30px" >
      <Grid container spacing={4} width="100%">
        {data &&
          data.data.map((item: IProduct) => {
            return (
              <Grid item xs={xs} key={item._id}>
                <Product
                  setCart={setCart}
                  image={item.images[0]}
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  discount={item.discount}
                />
              </Grid>
            );
          })}
      </Grid>
      <Box display="flex" justifyContent="center" my={5}>
        <Stack spacing={2}>
          <Pagination
            page={nextPage}
            count={data?.totalPage}
            onChange={handleChangePage}
            variant="outlined"
            color="primary"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default RenderProducts;
