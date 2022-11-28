import { Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import BasicBreadcrumbs from "../../../components/Atom/Breadcrumbs/Breadcrumbs";
import Paper from "../../../components/Atom/Paper/Paper";
import FormEditProduct from "./Organism/FormProduct/FormEditProduct";
type Props = {};

const EditProduct = (props: Props) => {
  return (
    <>
      <BasicBreadcrumbs />
      <Paper elevation={1}>
        <Typography variant="h5" textAlign="center" sx={{ py: 3 }}>
          Edit Product
        </Typography>
        <FormEditProduct />
      </Paper>
    </>
  );
};
export default EditProduct;
