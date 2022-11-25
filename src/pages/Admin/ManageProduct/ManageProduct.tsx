import React from "react";
import BasicBreadcrumbs from "../../../components/Atom/Breadcrumbs/Breadcrumbs";
import TableProduct from "../../../components/Organism/TableProduct/TableProduct";
import { Stack } from "@mui/material";
import ButtonLink from "../../../components/Atom/Button/ButtonLink";
import { useQuery } from "react-query";
import { getProduct} from "../../../services/productService/ProductService";

type Props = {};
const data2 = [
  {
    _id: 1,
    name: "Product 1",
    price: 100000,
    quantity: 200,
    discount: 23,
    description: "product description",
    image: "link image",
    create_at: "10-12-2022",
  },
  {
    _id: 2,
    name: "Product 1",
    price: 100000,
    quantity: 200,
    discount: 23,
    description: "product description",
    image: "link image",
    create_at: "10-12-2022",
  },
  {
    _id: 3,
    name: "Product 1",
    price: 100000,
    quantity: 200,
    discount: 23,
    description: "product description",
    image: "link image",
    create_at: "10-12-2022",
  },
  {
    _id: 4,
    name: "Product 1",
    price: 100000,
    quantity: 200,
    discount: 23,
    description: "product description",
    image: "link image",
    create_at: "10-12-2022",
  },
];
const ManageProduct = (props: Props) => {
  const { isLoading, error, data } = useQuery("repoData", () => getProduct(), {
    staleTime: 10000
  });
  console.log(data)
  if (isLoading) return <p>Loading..</p>;
  if (error) return <p>An error has occurred: </p>;
  return (
    <>
      <Stack direction="row" justifyContent="space-between" marginBottom={2}>
        <BasicBreadcrumbs />
        <ButtonLink to="/manage/product/add">Add Product</ButtonLink>
      </Stack>
      <TableProduct data={data.data} tableName="product" />
    </>
  );
};
export default ManageProduct;
