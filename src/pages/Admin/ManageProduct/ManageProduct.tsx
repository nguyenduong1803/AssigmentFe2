import React from "react";
import { Stack } from "@mui/material";

import TableProduct from "./Organism/TableProduct";
import BasicBreadcrumbs from "../../../components/Atom/Breadcrumbs/Breadcrumbs";
import ButtonLink from "../../../components/Atom/Button/ButtonLink";

const ManageProduct = () => {

  return (
    <>
      <Stack direction="row" justifyContent="space-between" marginBottom={2}>
        <BasicBreadcrumbs />
        <ButtonLink to="/manage/product/add">Add Product</ButtonLink>
      </Stack>
      <TableProduct/>
    </>
  );
};
export default ManageProduct;
