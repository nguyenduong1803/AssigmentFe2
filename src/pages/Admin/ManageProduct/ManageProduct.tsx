import React from "react";
import BasicBreadcrumbs from "../../../components/Atom/Breadcrumbs/Breadcrumbs";
import Buttons from "../../../components/Atom/Button/Button";
import TableProduct from "../../../components/Organism/TableProduct/TableProduct";
import { Stack } from "@mui/material";
import ButtonLink from "../../../components/Atom/Button/ButtonLink";
type Props = {};
const data = [
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
  return (
    <>
      <Stack direction="row" justifyContent="space-between" marginBottom={2}>
        <BasicBreadcrumbs />
        <ButtonLink to="/manage/product/add">Add Product</ButtonLink>
      </Stack>
      <TableProduct data={data} tableName="product" />
    </>
  );
};
export default ManageProduct;
