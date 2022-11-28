import { Box, Grid } from "@mui/material";
import React from "react";
import Product from "../../Atom/Product/Product";

type Props = {};

const RenderProducts = (props: Props) => {
  const options = {
    id: "asdflkadjs",
    image: "img",
    name: "Product",
    price: 22,
    discount: 20,
  };
  return (
    <Grid container mt={2} spacing={4}>
      <Grid item xs={3}>
        <Product {...options} />
      </Grid>
      <Grid item xs={3}>
        <Product {...options} />
      </Grid>
      <Grid item xs={3}>
        <Product {...options} />
      </Grid>
      <Grid item xs={3}>
        <Product {...options} />
      </Grid>
      <Grid item xs={3}>
        <Product {...options} />
      </Grid>
      <Grid item xs={3}>
        <Product {...options} />
      </Grid>
      <Grid item xs={3}>
        <Product {...options} />
      </Grid>
    </Grid>
  );
};

export default RenderProducts;
