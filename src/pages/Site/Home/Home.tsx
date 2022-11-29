import { Box, Container } from "@mui/material";
import { FC, useEffect, useState } from "react";
import Banner from "../../../components/Template/Banner/Banner";
import RenderBlog from "../../../components/Template/RenderBlog/RenderBlog";
import RenderProducts from "../../../components/Template/RenderProducts/RenderProducts";
import SaleProduct from "../../../components/Template/SaleProduct/SaleProduct";
import { getProduct } from "../../../services/productService/ProductService";
import FilterCategory from "./Template/FilterCategory";

type Props = {};
type typeData = {
  category: string;
  name: string;
  desc: string;
  id: string;
  image: string;
  price: string;
  quantity: number;
};
const Home: FC<Props> = () => {
  return (
    <>
      <Banner />
      <SaleProduct />
      <Container maxWidth="xl">
        <FilterCategory />
        <RenderProducts xs={3} />
        <RenderBlog />
      </Container>
    </>
  );
};
export default Home;
