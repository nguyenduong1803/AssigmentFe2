import React from "react";
import BasicBreadcrumbs from "../../../components/Atom/Breadcrumbs/Breadcrumbs";
import { Stack } from "@mui/material";
import ButtonLink from "../../../components/Atom/Button/ButtonLink";
import TableCategory from "./Organism/TableCategory";
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
const ManageCategory = (props: Props) => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" marginBottom={2}>
        <BasicBreadcrumbs />
        <ButtonLink to="/manage/category/add">Add Category</ButtonLink>
      </Stack>
      <TableCategory data={data} tableName="category" />
    </>
  );
};
export default ManageCategory;
