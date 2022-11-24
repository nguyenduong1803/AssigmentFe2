import { Typography } from "@mui/material";
import React from "react";
import BasicBreadcrumbs from "../../../components/Atom/Breadcrumbs/Breadcrumbs";
import Paper from "../../../components/Atom/Paper/Paper";
import FormProduct from "../../../components/Organism/FormProduct/FormProduct";
type Props = {};

const AddProduct = (props: Props) => {
  return (
    <>
      <BasicBreadcrumbs />
      <Paper elevation={1}>
        <Typography variant="h5" textAlign="center" sx={{py:3}}> Add Product</Typography>
        <FormProduct/>
      </Paper>
      
    </>
  );
};
export default AddProduct;
