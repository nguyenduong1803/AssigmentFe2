import { Box, Container, Grid, Typography } from "@mui/material";
import useDebounce from "hooks/useDebounce";
import React, { useState } from "react";
import Banner from "../../../components/Template/Banner/Banner";
import RenderProducts from "../../../components/Template/RenderProducts/RenderProducts";
import FilterProduct from "./Template/FilterProduct";

type Props = {};

const Products = (props: Props) => {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  console.log(category)
  console.log(search)
  const debounceSearch = useDebounce(search,500)
  return (
    <>
      <Banner />
      <Typography variant="h3" textAlign="center" my={4}>
        Shop
      </Typography>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Box border="1px solid #e4e4e4">
              <FilterProduct
                search={search}
                setSearch={setSearch}
                setCategory={setCategory}
              />
            </Box>
          </Grid>
          <Grid item xs={9}>
            <RenderProducts xs={4} category={category} search={debounceSearch} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Products;
