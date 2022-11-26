import React from "react";
import BasicBreadcrumbs from "../../../components/Atom/Breadcrumbs/Breadcrumbs";
import TableProduct from "../../../components/Organism/TableProduct/TableProduct";
import { Stack } from "@mui/material";
import { useQuery } from "react-query";
import { getProduct } from "../../../services/productService/ProductService";
import ButtonLink from "../../../components/Atom/Button/ButtonLink";
type Props = {};

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
      <TableProduct data={data?.data} tableName="product" />
    </>
  );
};
export default ManageProduct;
