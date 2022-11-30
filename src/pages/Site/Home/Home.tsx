import { Container } from "@mui/material";
import Banner from "../../../components/Template/Banner/Banner";
import RenderBlog from "../../../components/Template/RenderBlog/RenderBlog";
import RenderProducts from "../../../components/Template/RenderProducts/RenderProducts";
import SaleProduct from "../../../components/Template/SaleProduct/SaleProduct";
import FilterCategory from "./Template/FilterCategory";

const Home = () => {
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
